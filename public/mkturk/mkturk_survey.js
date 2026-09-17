// mkturk_survey.js
//
// Post-task exit survey for Prolific subjects, shown once the automator finishes
// and before the completion redirect to Prolific fires. Browser/OS are
// pre-filled from navigator.userAgent (editable); the rest is self-report.
//
// Saved as its own JSON file in the subject's data folder, same as the consent
// and calibration records.

function detectBrowserName() {
  const ua = navigator.userAgent;
  if (ua.includes('Edg/')) return 'Edge';
  if (ua.includes('Chrome/') && !ua.includes('Chromium')) return 'Chrome';
  if (ua.includes('Safari/') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Firefox/')) return 'Firefox';
  return 'Other';
}

function detectOSName() {
  const ua = navigator.userAgent;
  if (ua.includes('Mac OS X')) return 'macOS';
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  if (ua.includes('Linux')) return 'Linux';
  return 'Other';
}

function prolificSurveyPromise() {
  return new Promise((resolve) => {
    const overlay = document.getElementById('survey_overlay');
    const browserSel = document.getElementById('survey_browser');
    const osSel = document.getElementById('survey_os');
    const difficultyRow = document.getElementById('survey_difficulty');
    const sceneCountEl = document.getElementById('survey_scene_count');
    const sameDiffCountEl = document.getElementById('survey_samediff_count');
    const submitBtn = document.getElementById('survey_submit');

    const browserOptions = ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'];
    const osOptions = ['macOS', 'Windows', 'Linux', 'iOS', 'Android', 'Other'];
    browserSel.innerHTML = '';
    osSel.innerHTML = '';
    browserOptions.forEach((o) => browserSel.appendChild(new Option(o, o)));
    osOptions.forEach((o) => osSel.appendChild(new Option(o, o)));
    browserSel.value = detectBrowserName();
    osSel.value = detectOSName();

    let difficultyVal = null;
    difficultyRow.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        difficultyRow.querySelectorAll('button').forEach((b) => b.classList.remove('btn-primary'));
        difficultyRow.querySelectorAll('button').forEach((b) => b.classList.add('btn-light'));
        btn.classList.remove('btn-light');
        btn.classList.add('btn-primary');
        difficultyVal = parseInt(btn.dataset.val, 10);
        checkComplete();
      });
    });

    function checkComplete() {
      submitBtn.disabled = !(
        difficultyVal !== null &&
        sceneCountEl.value !== '' &&
        sameDiffCountEl.value !== ''
      );
    }
    sceneCountEl.addEventListener('input', checkComplete);
    sameDiffCountEl.addEventListener('input', checkComplete);

    overlay.style.display = 'flex';

    submitBtn.addEventListener(
      'click',
      async () => {
        submitBtn.disabled = true;
        const record = {
          ProlificId: ENV.ProlificId,
          StudyId: ENV.StudyId,
          SessionId: ENV.SessionId,
          Browser: browserSel.value,
          OperatingSystem: osSel.value,
          TaskDifficulty: difficultyVal,
          SceneIdentityCount: parseInt(sceneCountEl.value, 10),
          SameDifferentIdentityCount: parseInt(sameDiffCountEl.value, 10),
          Timestamp: new Date().toISOString(),
        };
        // Mirrors MTurk's mkturkfiles_mturk/userfiles/{wid}/surveys/{wid}_{aid}_{hid}.json --
        // its own sibling folder next to data/ and params/, not mixed into data/.
        const path = `/mkturkfiles_prolific/userfiles/${ENV.ProlificId}/surveys/${ENV.ProlificId}_${ENV.SessionId}.json`;
        try {
          const blob = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' });
          await storage.ref().child(path).put(blob, { contentType: 'application/json' });
          console.log('FIREBASE: Saved survey record ->', path);
        } catch (error) {
          console.error('[prolificSurveyPromise] Error saving survey record:', error);
        }
        overlay.style.display = 'none';
        resolve();
      },
      { once: true }
    );
  });
} //FUNCTION prolificSurveyPromise
