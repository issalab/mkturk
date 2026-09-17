// mkturk_consent.js
//
// IRB informed-consent screen for Prolific subjects (Columbia University CUIMC IRB,
// protocol #AAAS8742, PI Dr. Elias Issa). Gated to ENV.ProlificId only -- MTurk and
// regular dropdown-selected subjects are unaffected. Shown before PPI calibration.
//
// The decision (agree/decline) is recorded as its own JSON file in the subject's
// data folder, same as every other Prolific-specific record. Declining halts the
// session entirely: the returned promise simply never resolves, so nothing that
// awaits it -- calibration, the task itself -- ever runs.

function consentPromise() {
  return new Promise((resolve) => {
    const overlay = document.getElementById('consent_overlay');
    const agreeBtn = document.getElementById('consent_agree');
    const declineBtn = document.getElementById('consent_decline');
    const buttonsRow = document.getElementById('consent_buttons');
    const declinedMsg = document.getElementById('consent_declined_message');

    overlay.style.display = 'flex';

    async function recordConsent(decision) {
      const record = {
        ProlificId: ENV.ProlificId,
        StudyId: ENV.StudyId,
        SessionId: ENV.SessionId,
        Protocol: 'AAAS8742',
        Decision: decision,
        Timestamp: new Date().toISOString(),
      };
      const path = `${DATA_SAVEPATH}${ENV.ProlificId}_${ENV.SessionId}_consent.json`;
      try {
        const blob = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' });
        await storage.ref().child(path).put(blob, { contentType: 'application/json' });
        console.log('FIREBASE: Saved consent record ->', path);
      } catch (error) {
        console.error('[consentPromise] Error saving consent record:', error);
      }
    }

    agreeBtn.addEventListener(
      'click',
      async () => {
        agreeBtn.disabled = true;
        declineBtn.disabled = true;
        await recordConsent('agree');
        overlay.style.display = 'none';
        resolve();
      },
      { once: true }
    );

    declineBtn.addEventListener(
      'click',
      async () => {
        agreeBtn.disabled = true;
        declineBtn.disabled = true;
        await recordConsent('decline');
        buttonsRow.style.display = 'none';
        declinedMsg.style.display = 'block';
        // No resolve() here -- by design. Declining must end the session, not just this step.
      },
      { once: true }
    );
  });
} //FUNCTION consentPromise
