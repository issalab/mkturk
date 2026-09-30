// mkturk_survey.js
//
// Post-task exit survey for Prolific subjects, shown once the automator finishes
// and before the completion redirect to Prolific fires.
//
// The question set is entirely DATA-DRIVEN, fetched at runtime from a JSON file
// in Firebase Storage rather than hardcoded here - adding/editing a survey for
// a study is just uploading/editing that JSON, no code change or deploy needed:
//
//   mkturkfiles/parameterfiles/prolific_surveys/<TASK>_survey.json   (per-task)
//   mkturkfiles/parameterfiles/prolific_surveys/default_survey.json (fallback,
//     used whenever no file exists for the current TASK)
//
// Survey JSON shape:
// {
//   "title": "Before you finish, a few quick questions",
//   "questions": [
//     {"id": "browser", "type": "select", "prompt": "...", "options": ["Chrome","Safari",...], "required": true, "autodetect": "browser"},
//     {"id": "difficulty", "type": "scale5", "prompt": "...", "required": true},
//     {"id": "face_count", "type": "number", "prompt": "...", "min": 0, "max": 20, "required": true},
//     {"id": "comments", "type": "text", "prompt": "...", "required": false}
//   ]
// }
// Supported "type"s: select, scale5 (1-5 button row), number, text (textarea).
// "required" defaults to true if omitted. "autodetect" (select only, optional):
// "browser" or "os" - pre-fills the dropdown from navigator.userAgent.
//
// The saved record has one field per question id (plus the usual
// ProlificId/StudyId/SessionId/Timestamp), so it's safe to add/remove/rename
// questions between studies - each study's survey record just reflects
// whatever that study's JSON defined.
//
// Saved as its own JSON file in the subject's data folder, same as the
// consent and calibration records.

const SURVEY_CONFIG_DIR = 'mkturkfiles/parameterfiles/prolific_surveys';
const SURVEY_CONFIG_DEFAULT = 'default_survey.json';

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

async function loadSurveyConfig() {
  const taskName = prolificUserConfig.task;
  if (taskName) {
    try {
      return await loadTextfromFirebase(`${SURVEY_CONFIG_DIR}/${taskName}_survey.json`);
    } catch (error) {
      console.log(`[prolificSurveyPromise] No survey JSON for task "${taskName}" - falling back to default_survey.json`);
    }
  }
  return await loadTextfromFirebase(`${SURVEY_CONFIG_DIR}/${SURVEY_CONFIG_DEFAULT}`);
}

// Builds one question's DOM (prompt + control) and returns:
//   { el: <appended to container>, getValue: () => value, isComplete: () => bool }
function buildQuestionEl(q, index) {
  const wrap = document.createElement('div');
  const required = q.required !== false;

  const prompt = document.createElement('p');
  prompt.style.fontSize = '14px';
  prompt.style.marginBottom = '6px';
  prompt.textContent = `${index + 1}. ${q.prompt}`;
  wrap.appendChild(prompt);

  let getValue, isComplete, attachChangeListener;

  if (q.type === 'select') {
    const sel = document.createElement('select');
    sel.className = 'form-select';
    sel.style.marginBottom = '16px';
    (q.options || []).forEach((o) => sel.appendChild(new Option(o, o)));
    if (q.autodetect === 'browser') sel.value = detectBrowserName();
    else if (q.autodetect === 'os') sel.value = detectOSName();
    wrap.appendChild(sel);
    getValue = () => sel.value;
    isComplete = () => !required || sel.value !== '';
    attachChangeListener = (fn) => sel.addEventListener('change', fn);
  } else if (q.type === 'scale5') {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '8px';
    row.style.marginBottom = '16px';
    let val = null;
    for (let v = 1; v <= 5; v++) {
      const btn = document.createElement('button');
      btn.className = 'btn btn-light';
      btn.style.flex = '1';
      btn.textContent = String(v);
      btn.dataset.val = String(v);
      row.appendChild(btn);
    }
    wrap.appendChild(row);
    getValue = () => val;
    isComplete = () => !required || val !== null;
    attachChangeListener = (fn) => {
      row.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
          row.querySelectorAll('button').forEach((b) => {
            b.classList.remove('btn-primary');
            b.classList.add('btn-light');
          });
          btn.classList.remove('btn-light');
          btn.classList.add('btn-primary');
          val = parseInt(btn.dataset.val, 10);
          fn();
        });
      });
    };
  } else if (q.type === 'number') {
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'form-control';
    input.style.marginBottom = '16px';
    if (q.min !== undefined) input.min = q.min;
    if (q.max !== undefined) input.max = q.max;
    wrap.appendChild(input);
    getValue = () => (input.value === '' ? null : parseInt(input.value, 10));
    isComplete = () => !required || input.value !== '';
    attachChangeListener = (fn) => input.addEventListener('input', fn);
  } else if (q.type === 'text') {
    const textarea = document.createElement('textarea');
    textarea.className = 'form-control';
    textarea.rows = 3;
    textarea.style.marginBottom = '20px';
    wrap.appendChild(textarea);
    getValue = () => textarea.value;
    isComplete = () => !required || textarea.value.trim() !== '';
    attachChangeListener = (fn) => textarea.addEventListener('input', fn);
  } else {
    console.error(`[prolificSurveyPromise] Unknown survey question type "${q.type}" for id "${q.id}" - skipping`);
    return null;
  }

  return { el: wrap, getValue, isComplete, attachChangeListener };
}

function prolificSurveyPromise() {
  return new Promise((resolve, reject) => {
    const overlay = document.getElementById('survey_overlay');
    const titleEl = document.getElementById('survey_title');
    const container = document.getElementById('survey_questions_container');
    const submitBtn = document.getElementById('survey_submit');

    loadSurveyConfig()
      .then((config) => {
        titleEl.textContent = config.title || 'Before you finish, a few quick questions';
        container.innerHTML = '';

        const fields = []; // [{id, getValue, isComplete}]
        (config.questions || []).forEach((q, i) => {
          const built = buildQuestionEl(q, i);
          if (!built) return;
          container.appendChild(built.el);
          fields.push({ id: q.id, getValue: built.getValue, isComplete: built.isComplete });
          built.attachChangeListener(checkComplete);
        });

        function checkComplete() {
          submitBtn.disabled = !fields.every((f) => f.isComplete());
        }
        checkComplete(); // in case every question is optional

        overlay.style.display = 'flex';

        submitBtn.addEventListener(
          'click',
          async () => {
            submitBtn.disabled = true;
            const record = {
              ProlificId: ENV.ProlificId,
              StudyId: ENV.StudyId,
              SessionId: ENV.SessionId,
              Timestamp: new Date().toISOString(),
            };
            fields.forEach((f) => {
              record[f.id] = f.getValue();
            });
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
      })
      .catch((error) => {
        // Both the per-task and default_survey.json fetches failed - don't hang
        // the session on a missing/misconfigured survey file; skip straight to
        // the completion redirect instead.
        console.error('[prolificSurveyPromise] Could not load any survey config, skipping survey:', error);
        resolve();
      });
  });
} //FUNCTION prolificSurveyPromise
