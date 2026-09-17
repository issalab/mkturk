// mkturk_calibration.js
//
// Credit-card physical-PPI calibration for Prolific subjects on unknown devices.
// findDPI() (mkturk_screenfunctions.js) only ever recovers 96 * devicePixelRatio,
// which has no relationship to a monitor's true physical size -- it's a CSS
// convention, not a measurement. Since Prolific participants are never in the
// firestore/devices registry (unlike lab-known tablets), that fallback is the
// only thing they'd ever hit, so we calibrate directly against a known-size
// physical object (a standard ID-1 card) instead.
//
// Gated to ENV.ProlificId only -- MTurk and regular dropdown-selected subjects
// keep using the existing DeviceConfig/queryDevice/findDPI() path untouched.

const CALIBRATION_CARD_WIDTH_INCHES = 3.370; // ISO/IEC 7810 ID-1 standard card width
const CALIBRATION_CARD_HEIGHT_INCHES = 2.125; // ISO/IEC 7810 ID-1 standard card height
const CALIBRATION_CARD_RATIO = CALIBRATION_CARD_WIDTH_INCHES / CALIBRATION_CARD_HEIGHT_INCHES;
const CALIBRATION_STORAGE_KEY = 'mkturk_calibrated_ppi';

function calibratePPIPromise() {
  return new Promise((resolve) => {
    // Reuse a calibration already done earlier this browser session (e.g. on a
    // mid-task reload) rather than forcing the participant to redo it.
    const cached = localStorage.getItem(CALIBRATION_STORAGE_KEY);
    if (cached && !isNaN(parseFloat(cached))) {
      console.log('[calibratePPIPromise] Using CACHED value from localStorage, screen never shown:', cached);
      resolve(parseFloat(cached));
      return;
    }
    console.log('[calibratePPIPromise] No cache found -- showing calibration screen for real.');

    const overlay = document.getElementById('calibration_overlay');
    const cardEl = document.getElementById('calibration_card');
    const handleEl = document.getElementById('calibration_handle');
    const biggerBtn = document.getElementById('calibration_bigger');
    const smallerBtn = document.getElementById('calibration_smaller');
    const confirmBtn = document.getElementById('calibration_confirm');

    overlay.style.display = 'flex';

    let widthPx = Math.max(
      160,
      Math.min(96 * (window.devicePixelRatio || 1) * CALIBRATION_CARD_WIDTH_INCHES, window.innerWidth * 0.7)
    );
    const startingWidthPx = widthPx;
    console.log('[calibratePPIPromise] Starting width:', startingWidthPx.toFixed(1) + 'px');

    function applySize() {
      const maxAllowed = Math.min(900, window.innerWidth - 72);
      widthPx = Math.max(90, Math.min(widthPx, maxAllowed));
      cardEl.style.width = widthPx + 'px';
      cardEl.style.height = widthPx / CALIBRATION_CARD_RATIO + 'px';
    }

    // ---- corner-handle drag (mouse + touch via Pointer Events) ----
    let dragging = false;
    let dragStartX = 0;
    let dragStartWidth = 0;

    handleEl.addEventListener('pointerdown', (e) => {
      dragging = true;
      dragStartX = e.clientX;
      dragStartWidth = widthPx;
      handleEl.setPointerCapture(e.pointerId);
    });
    handleEl.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      widthPx = dragStartWidth + (e.clientX - dragStartX) * 2; // *2: drag from center-ish feel
      applySize();
    });
    handleEl.addEventListener('pointerup', () => { dragging = false; });
    handleEl.addEventListener('pointercancel', () => { dragging = false; });

    // ---- nudge buttons ----
    biggerBtn.addEventListener('click', () => { widthPx *= 1.03; applySize(); });
    smallerBtn.addEventListener('click', () => { widthPx *= 0.97; applySize(); });

    // ---- confirm: measure and resolve ----
    confirmBtn.addEventListener(
      'click',
      () => {
        const rect = cardEl.getBoundingClientRect();
        const ppi = rect.width / CALIBRATION_CARD_WIDTH_INCHES;
        console.log('[calibratePPIPromise] Confirmed. Final width:', rect.width.toFixed(1) + 'px (started at ' + startingWidthPx.toFixed(1) + 'px) -> PPI:', ppi.toFixed(1));
        localStorage.setItem(CALIBRATION_STORAGE_KEY, ppi.toString());
        overlay.style.display = 'none';
        resolve(ppi);
      },
      { once: true }
    );

    window.addEventListener('resize', applySize);

    applySize();
  });
} //FUNCTION calibratePPIPromise

async function saveScreenCalibrationtoFirebase() {
  const record = {
    ProlificId: ENV.ProlificId,
    StudyId: ENV.StudyId,
    SessionId: ENV.SessionId,
    ViewportPPI: ENV.ViewportPPI,
    ViewportPixels: ENV.ViewportPixels,
    DevicePixelRatio: window.devicePixelRatio || 1,
    Timestamp: new Date().toISOString(),
  };
  const path = `${DATA_SAVEPATH}${ENV.ProlificId}_${ENV.SessionId}_calibration.json`;
  try {
    const blob = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' });
    await storage.ref().child(path).put(blob, { contentType: 'application/json' });
    console.log('FIREBASE: Saved calibration record ->', path);
  } catch (error) {
    console.error('[saveScreenCalibrationtoFirebase] Error saving calibration record:', error);
  }
} //FUNCTION saveScreenCalibrationtoFirebase
