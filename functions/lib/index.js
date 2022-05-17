"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bqInsertDisplayTimes = exports.submitAssignment = exports.submitSurvey = exports.testOnCall = exports.testOnRequest = exports.sayHello = exports.listAllUsers = exports.copyParamFile = exports.processMturkUser = exports.isMturkUser = exports.createTokenOnServer = exports.isLabMember = exports.detectDevice = exports.bqListDatasets = exports.listTables = exports.bqQuery = exports.bqInsertEyeData = exports.bqInsertTouchData = exports.bqInsertPhotodiodeData = void 0;
const functions = require("firebase-functions");
const bigquery_1 = require("@google-cloud/bigquery");
const DeviceDetector = require("device-detector-js");
const admin = require("firebase-admin");
// const cors = require('cors')({ origin: true });
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
function insertHandler(err, apiResp) {
    if (err) {
        console.log(err);
        if (err.name === 'PartialFailureError') {
            console.log(err);
        }
    }
}
const schema = {
    fields: [
        {
            name: 'timestamp',
            type: 'TIMESTAMP',
            mode: 'REQUIRED',
        },
        {
            name: 'trial_num',
            type: 'INTEGER',
            mode: 'REQUIRED',
        },
        {
            name: 'num_eyes',
            type: 'INTEGER',
            mode: 'REQUIRED',
        },
        {
            name: 'left_x',
            type: 'FLOAT',
            mode: 'NULLABLE',
        },
        {
            name: 'left_y',
            type: 'FLOAT',
            mode: 'NULLABLE',
        },
        {
            name: 'left_aux_0',
            type: 'FLOAT',
            mode: 'NULLABLE',
        },
        {
            name: 'left_aux_1',
            type: 'FLOAT',
            mode: 'NULLABLE',
        },
        {
            name: 'right_x',
            type: 'FLOAT',
            mode: 'NULLABLE',
        },
        {
            name: 'right_y',
            type: 'FLOAT',
            mode: 'NULLABLE',
        },
        {
            name: 'right_aux_0',
            type: 'FLOAT',
            mode: 'NULLABLE',
        },
        {
            name: 'right_aux_1',
            type: 'FLOAT',
            mode: 'NULLABLE',
        },
    ],
};
const createTableOptions = {
    schema: schema,
    timePartitioning: {
        type: 'DAY',
        field: 'timestamp',
    },
};
exports.bqInsertPhotodiodeData = functions.https.onCall((row) => {
    const bq = new bigquery_1.BigQuery();
    const dataset = bq.dataset('photodiode');
    const table = dataset.table(row.agent);
    table
        .exists()
        .then(async (tableExists) => {
        if (tableExists[0]) {
            row.timestamp = new Date(row.timestamp);
            table.insert(row, {}, insertHandler);
            return 'success';
        }
        else {
            dataset
                .createTable(row.agent, photodiodeTableOptions)
                .then(([newTable]) => {
                row.timestamp = new Date(row.timestamp);
                newTable.insert(row, {}, insertHandler);
            })
                .catch((error) => {
                console.error('[bqInsertPhotodiodeData]::dataset.createTable() Error:', error);
                return error;
            });
            return 'success';
        }
    })
        .catch((error) => {
        console.error('[bqInsertPhotodiodeData]::table.exists() Error:', error);
        return error;
    });
});
exports.bqInsertTouchData = functions.https.onCall((rows) => {
    const bq = new bigquery_1.BigQuery();
    const dataset = bq.dataset('touchdata');
    const table = dataset.table(rows[0].agent);
    console.log('bqInsertTouchData rows received:', rows);
    table
        .exists()
        .then(async (existsData) => {
        const exists = existsData[0];
        if (exists) {
            rows.forEach((row) => {
                console.log('row:', row);
                delete row.agent;
                row.timestamp = new Date(row.timestamp);
                for (let key in row) {
                    if (Number.isNaN(row[key])) {
                        row[key] = null;
                    }
                }
            });
            table.insert(rows, {}, insertHandler);
            return rows;
        }
        else {
            const [newTable] = await dataset.createTable(rows[0].agent, touchDataTableOptions);
            console.log(`TouchData Table ${newTable.id} created with partitioning: `);
            rows.forEach((row) => {
                console.log('row', row);
                delete row.agent;
                row.timestamp = new Date(row.timestamp);
                for (let key in row) {
                    if (Number.isNaN(row[key])) {
                        row[key] = null;
                    }
                }
            });
            newTable.insert(rows, {}, insertHandler);
            return rows;
        }
    })
        .catch((error) => {
        console.error('Exists function error:', error);
    });
});
/* caller must guarantee that all rows belong to the same agent */
exports.bqInsertEyeData = functions.https.onCall((rows) => {
    const bq = new bigquery_1.BigQuery();
    const dataset = bq.dataset('eyedata');
    const table = dataset.table(rows[0].agent);
    console.log('bqinserteyedata rows received:', rows);
    // console.log('bqinserteyedata AGENT:', rows[0].agent);
    table
        .exists()
        .then(async (existsData) => {
        const exists = existsData[0];
        if (exists) {
            rows.forEach((row) => {
                console.log('row', row);
                delete row.agent;
                row.timestamp = new Date(row.timestamp);
                for (let key in row) {
                    if (Number.isNaN(row[key])) {
                        row[key] = null;
                    }
                }
            });
            console.log('existing table entire rows:', rows);
            table.insert(rows, {}, insertHandler);
            console.log('exists table insert');
            return;
        }
        else {
            const [newTable] = await dataset.createTable(rows[0].agent, createTableOptions);
            console.log(`Table ${newTable.id} created with partitioning: `);
            console.log(newTable.metadata.timePartitioning);
            rows.forEach((row) => {
                console.log('row', row);
                delete row.agent;
                row.timestamp = new Date(row.timestamp);
                for (let key in row) {
                    if (Number.isNaN(row[key])) {
                        row[key] = null;
                    }
                }
            });
            console.log('new table entire rows:', rows);
            newTable.insert(rows, {}, insertHandler);
            console.log('new table insert');
            return;
        }
    })
        .catch((error) => {
        console.error('Exists function error:', error);
    });
});
exports.bqQuery = functions.https.onCall(async (query) => {
    const bq = new bigquery_1.BigQuery();
    const options = {
        query: query,
        location: 'US',
    };
    const [rows] = await bq.query(options);
    return rows;
});
exports.listTables = functions.https.onCall(async (userDataset) => {
    const bq = new bigquery_1.BigQuery();
    const dataset = bq.dataset(userDataset);
    const tables = await dataset.getTables();
    const arr = [];
    tables[0].forEach((table) => {
        arr.push(table.metadata);
    });
    return arr;
});
exports.bqListDatasets = functions.https.onCall(async () => {
    const bq = new bigquery_1.BigQuery();
    const [datasets] = await bq.getDatasets();
    const arr = [];
    datasets.forEach((dataset) => {
        arr.push(dataset.id);
    });
    return arr;
});
exports.detectDevice = functions.https.onCall((userAgent) => {
    const detector = new DeviceDetector();
    let device = detector.parse(userAgent);
    return new Promise((resolve, reject) => {
        try {
            resolve(device);
        }
        catch (e) {
            reject(e);
        }
    });
});
exports.isLabMember = functions.https.onCall(async (idToken) => {
    return admin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
        console.log('isLabMember?', decodedToken.labMember);
        return decodedToken.labMember;
    })
        .catch((e) => {
        console.error('Error decoding idToken', e);
    });
});
exports.createTokenOnServer = functions.https.onCall((data, context) => {
    console.log('data:', data);
    return 'hi';
});
exports.isMturkUser = functions.https.onCall(async (idToken) => {
    try {
        let decodedToken = await admin.auth().verifyIdToken(idToken);
        return decodedToken.mturkUser;
    }
    catch (error) {
        console.error('[isMturkUser] Error decoding idToken:', error);
    }
});
exports.processMturkUser = functions.https.onCall(async (data) => {
    class ProcessMTurkUserError extends Error {
        constructor(message) {
            super(message);
            // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
            Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
            this.name = ProcessMTurkUserError.name; // stack traces display correctly now
        }
    }
    const firestore = admin.firestore();
    const bucket = admin.storage().bucket();
    let decodedToken;
    try {
        decodedToken = await admin
            .auth()
            .verifyIdToken(data.token)
            .then((tkn) => {
            console.log('[verifyIdToken] Decode Success');
            return tkn;
        });
    }
    catch (e) {
        console.error('[verifyIdToken] Decode Error:', e);
        return { status: 'error', message: `[verifyIdToken] Decode Error: ${e}` };
    }
    let mturkUsersQuerySnapshot = await firestore
        .collection('mturkusers')
        .where('uid', '==', decodedToken.uid)
        .get();
    // user creation OR existing user update
    try {
        if (mturkUsersQuerySnapshot.empty) {
            // new user
            admin
                .auth()
                .setCustomUserClaims(decodedToken.uid, { wid: data.wid })
                .then(() => console.log('[setCustomUserClaims] Add Claim (wid) Success'))
                .catch((e) => {
                console.error('[setCustomUserClaims] Add Claim (wid) Error:', e);
                throw new ProcessMTurkUserError(`[setCustomUserClaims] Add Claim (wid) Error: ${e}`);
            });
            let assignmentEntry = {
                assignmentId: data.aid,
                hitId: data.hid,
                // task: data.task,
                startTime: admin.firestore.Timestamp.fromDate(new Date()),
            };
            let userData = {
                workerId: data.wid,
                uid: decodedToken.uid,
                assignmentList: [assignmentEntry],
            };
            firestore
                .collection('mturkusers')
                .doc(data.wid)
                .set(userData)
                .then(() => console.log('[mturkusers] New User Created'))
                .catch((e) => {
                console.error('[mturkusers] User Creation Error:', e);
                throw new ProcessMTurkUserError(`[mturkusers] User Creation Error: ${e}`);
            });
        }
        else {
            // existing user
            let docs = mturkUsersQuerySnapshot.docs;
            if (docs.length == 1 && docs[0].data().workerId == data.wid) {
                let assignmentEntry = {
                    assignmentId: data.aid,
                    hitId: data.hid,
                    // task: data.task,
                    startTime: admin.firestore.Timestamp.fromDate(new Date()),
                };
                let mturkUser = docs[0].data();
                let assignmentList = mturkUser.assignmentList;
                let lastEntry = assignmentList[assignmentList.length - 1];
                if (lastEntry.assignmentId !== data.aid &&
                    lastEntry.hitId !== data.hid) {
                    assignmentList.push(assignmentEntry);
                    firestore
                        .collection('mturkusers')
                        .doc(decodedToken.wid)
                        .set(mturkUser)
                        .then(() => console.log('[mturkusers] Existing User Entry Updated'))
                        .catch((e) => {
                        console.error('[mturkusers] Existing User Entry Update Error:', e);
                        throw new ProcessMTurkUserError(`[mturkusers] Existing User Entry Update Error: ${e}`);
                    });
                }
                else {
                    return {
                        status: 'error',
                        message: 'assignment entry already exists',
                    };
                }
            }
            else {
                throw new ProcessMTurkUserError(`[mturkusers] Multiple User Error: uid=${decodedToken.uid}, wid=${data.wid}, docs=${docs}, empty=${mturkUsersQuerySnapshot.empty}`);
            }
        }
    }
    catch (error) {
        return { status: 'error', message: error.message };
    }
    let mturkhit = {
        hitId: data.hid,
        // task: data.task,
        path: `mkturkfiles/paramterfiles/mturk_params/${data.hid}.json`,
        workerIds: [data.wid],
    };
    // register HIT data & setup ${wid}_params.json
    try {
        let hitSnapshot = await firestore
            .collection('mturkhits')
            .where('hitId', '==', data.hid)
            .get();
        if (hitSnapshot.empty) {
            firestore
                .collection('mturkhits')
                .doc(data.hid)
                .set(mturkhit)
                .then(() => {
                console.log('[mturkhits] Created a new HIT entry');
                console.log('[mturkhits] Registration Success');
            })
                .catch((e) => {
                console.error('[mturkhits] Registration Error:', e);
                throw new ProcessMTurkUserError(`[mturkhits] Registration Error: ${e}`);
            });
        }
        else {
            let docs = hitSnapshot.docs;
            firestore
                .collection('mturkhits')
                .doc(docs[0].id)
                .update({
                workerIds: admin.firestore.FieldValue.arrayUnion(data.wid),
            })
                .then(() => console.log('[mturkhits] Registration Success'))
                .catch((e) => {
                console.error('[mturkhits] Existing HIT Registration Error:', e);
                throw new ProcessMTurkUserError(`[mturkhits] Existing HIT Registration Error: ${e}`);
            });
        }
        // const tmpPath = await bucket.file(`/mkturkfiles/parameterfiles/mturk_params/${data.hid}_params.json`)
        //   .download()
        //   .then(value => {
        //     let menuFile = JSON.parse(value[0].toString('utf8'));
        //     return menuFile[data.task];
        //   })
        //   .catch(e => {
        //     console.error('[menu.json] Find Task Error:', e);
        //     throw new ProcessMTurkUserError(
        //       `[menu.json] Find Task Error: ${e}`
        //     );
        //   });
        const paramfilePath = `mkturkfiles/parameterfiles/mturk_params/${data.hid}_params.json`;
        const paramFile = await bucket
            .file(paramfilePath)
            .download()
            .then((value) => {
            let tmp = JSON.parse(value[0].toString('utf8'));
            tmp.Agent = data.wid;
            tmp.AssignmentId = data.aid;
            tmp.HITId = data.hid;
            return tmp;
        })
            .catch((e) => {
            console.error('[paramfile] Find Param File Error:', e);
            throw new ProcessMTurkUserError(`[paramfile] Find Param File Error: ${e}`);
        });
        const destArr = [
            // `mkturkfiles/parameterfiles/subjects/${data.wid}_params.json`,
            // `user_files/${data.wid}/${data.wid}_${data.hid}_${data.aid}params.json`,
            `mkturkfiles_mturk/userfiles/${data.wid}/params/${data.wid}_${data.aid}_${data.hid}_params.json`,
        ];
        destArr.forEach(async (dest) => {
            bucket
                .file(dest)
                .save(JSON.stringify(paramFile, null, 2))
                .then(() => console.log(`[mturkuser=${data.wid}] Params Copy Success`))
                .catch((e) => {
                console.error(`[mturkuser=${data.wid}] Params Copy Error: ${e}`);
                throw new ProcessMTurkUserError(`[mturkuser=${data.wid}] Params Copy Error: ${e}`);
            });
        });
    }
    catch (error) {
        return { status: 'error', message: error.message };
    }
    return { status: 'success', message: '' };
});
exports.copyParamFile = functions.https.onCall(async () => {
    const storage = admin.storage().bucket('mkturk-mturk');
    const file = storage.file('mkturkfiles/parameterfiles/params_storage/m2s_wrench_camel.json');
    await file.copy('mkturkfiles/parameterfiles/subjects/Hectoro_params.json');
    const fileData = await file.download().then((data) => {
        return JSON.parse(data[0].toString('utf8'));
    });
    return fileData;
});
exports.listAllUsers = functions.https.onCall(() => {
    return admin
        .auth()
        .listUsers(1000)
        .then((listUserResult) => {
        return listUserResult;
    })
        .catch((e) => {
        console.error('Error listing users', e);
    });
});
exports.sayHello = functions.https.onRequest((req, res) => {
    let aid, hid, wid;
    aid = req.query.aid;
    hid = req.query.hid;
    wid = req.query.wid;
    res.send({ aid: aid, hid: hid, wid: wid });
    res.json({ aid: aid, hid: hid, wid: wid });
    return;
});
exports.testOnRequest = functions.https.onRequest((req, res) => {
    let tmp;
    tmp = 'testOnRequest';
    res.send({ tmp: tmp });
    return;
});
exports.testOnCall = functions.https.onCall(() => {
    return 'testOnCall';
});
exports.submitSurvey = functions.https.onCall(async (data) => {
    const surveySubmitTime = new Date();
    class SubmitSurveyError extends Error {
        constructor(message) {
            super(message);
            Object.setPrototypeOf(this, new.target.prototype);
            this.name = SubmitSurveyError.name;
        }
    }
    const firestore = admin.firestore();
    const bucket = admin.storage().bucket();
    let userSnapshot = await firestore
        .collection('mturkusers')
        .where('workerId', '==', data.wid)
        .get();
    try {
        if (userSnapshot.empty) {
            console.error('[submitSurvey] User Not Found');
            throw new SubmitSurveyError('[submitSurvey] User Not Found');
        }
        else {
            let docs = userSnapshot.docs;
            if (docs.length === 1) {
                let mturkUser = docs[0].data();
                let assignmentList = mturkUser.assignmentList;
                let lastEntry = assignmentList[assignmentList.length - 1];
                if (data.aid !== lastEntry.assignmentId) {
                    console.error('[submitSurvey] AssignmentId Mismatch');
                    throw new SubmitSurveyError('[submitSurvey] AssignmentId Mismatch');
                }
                else if (data.hid !== lastEntry.hitId) {
                    console.error('[submitSurvey] HITId Mismatch');
                    throw new SubmitSurveyError('[submitSurvey] HITId Mismatch');
                }
                lastEntry.surveySubmitTime =
                    admin.firestore.Timestamp.fromDate(surveySubmitTime);
                const surveyFilePath = `mkturkfiles_mturk/userfiles/${data.wid}/surveys/${data.wid}_${data.aid}_${data.hid}.json`;
                return await bucket
                    .file(surveyFilePath)
                    .save(JSON.stringify(data.survey, null, 2))
                    .then(async () => {
                    const mturkuserUpdated = await firestore
                        .collection('mturkusers')
                        .doc(data.wid)
                        .set(mturkUser)
                        .then(() => {
                        return 200;
                    })
                        .catch((e) => {
                        return 500;
                    });
                    if (mturkuserUpdated === 200) {
                        return { status: 200, message: `${lastEntry.submitCode}` };
                    }
                    else {
                        // throw new SubmitSurveyError(`mturkuser=${data.wid}'s entry could not be set`);
                        return { status: 500, message: 'Error' };
                    }
                })
                    .catch((e) => {
                    console.error('[submitSurvey] Error:', e);
                    throw new SubmitSurveyError(`mturkuser=${data.wid}'s entry could not be set`);
                });
            }
            console.error('[submitSurvey] More than one document with the same workerId');
            throw new SubmitSurveyError('[submitSurvey] More than one document with the same workerId');
        }
    }
    catch (e) {
        return { status: 500, message: e.message };
    }
});
exports.submitAssignment = functions.https.onCall(async (data) => {
    const submitTime = new Date();
    class SubmitAssignmentError extends Error {
        constructor(message) {
            super(message);
            // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
            Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
            this.name = SubmitAssignmentError.name; // stack traces display correctly now
        }
    }
    const firestore = admin.firestore();
    let userSnapshot = await firestore
        .collection('mturkusers')
        .where('workerId', '==', data.wid)
        .get();
    try {
        if (userSnapshot.empty) {
            console.error('[submitAssignment] User Not Found');
            throw new SubmitAssignmentError('[submitAssignment] User Not Found');
        }
        else {
            let docs = userSnapshot.docs;
            if (docs.length === 1) {
                let mturkUser = docs[0].data();
                let assignmentList = mturkUser.assignmentList;
                let lastEntry = assignmentList[assignmentList.length - 1];
                if (data.aid !== lastEntry.assignmentId) {
                    console.error('[submitAssignment] AssignmentId Mismatch');
                    throw new SubmitAssignmentError('[submitAssignment] AssignmentId Mismatch');
                }
                else if (data.hid !== lastEntry.hitId) {
                    console.error('[submitAssignment] HITId Mismatch');
                    throw new SubmitAssignmentError('[submitAssignment] HITId Mismatch');
                }
                lastEntry.submitCode = Math.random().toString(36).substr(2);
                lastEntry.submitTime = admin.firestore.Timestamp.fromDate(submitTime);
                return await firestore
                    .collection('mturkusers')
                    .doc(data.wid)
                    .set(mturkUser)
                    .then(() => {
                    console.log('[submitAssignment] assignment submission success');
                    return { status: 'success', message: `${lastEntry.submitCode}` };
                })
                    .catch((e) => {
                    console.error('[submitAssignment] set() error');
                    throw new SubmitAssignmentError('[submitAssignment] set() error');
                });
            }
            console.error('[submitAssignment] More than one document with the same workerId');
            throw new SubmitAssignmentError('[submitAssignment] More than one document with the same workerId');
        }
    }
    catch (error) {
        return { status: 'error', message: error.message };
    }
});
const displayTimeSchema = {
    fields: [
        {
            name: 'timestamp',
            type: 'TIMESTAMP',
            mode: 'REQUIRED',
        },
        {
            name: 'trial_num',
            type: 'INTEGER',
            mode: 'REQUIRED',
        },
        {
            name: 'frame_num',
            type: 'INTEGER',
            mode: 'REPEATED',
        },
        {
            name: 't_desired',
            type: 'FLOAT',
            mode: 'REPEATED',
        },
        {
            name: 't_actual',
            type: 'FLOAT',
            mode: 'REPEATED',
        },
    ],
};
const displayTimeTableOptions = {
    schema: displayTimeSchema,
    timePartitioning: {
        type: 'DAY',
        field: 'timestamp',
    },
};
const touchDataSchema = {
    fields: [
        {
            name: 'trial_num',
            type: 'INTEGER',
            mode: 'REQUIRED',
        },
        {
            name: 'timestamp',
            type: 'TIMESTAMP',
            mode: 'REQUIRED',
        },
        {
            name: 'touch_x',
            type: 'FLOAT',
            mode: 'NULLABLE',
        },
        {
            name: 'touch_y',
            type: 'FLOAT',
            mode: 'NULLABLE',
        },
        {
            name: 'meta',
            type: 'INTEGER',
            mode: 'NULLABLE',
        },
    ],
};
const touchDataTableOptions = {
    schema: touchDataSchema,
    timePartitioning: {
        type: 'DAY',
        field: 'timestamp',
    },
};
const photodiodeTableSchema = {
    fields: [
        {
            name: 'agent',
            type: 'STRING',
            mode: 'REQUIRED',
        },
        {
            name: 'timestamp',
            type: 'TIMESTAMP',
            mode: 'REQUIRED',
        },
        {
            name: 'photodiode',
            type: 'INTEGER',
            mode: 'REPEATED',
        },
        {
            name: 'trial_num',
            type: 'INTEGER',
            mode: 'REQUIRED',
        },
        {
            name: 't',
            type: 'INTEGER',
            mode: 'REPEATED',
        },
    ],
};
const photodiodeTableOptions = {
    schema: photodiodeTableSchema,
    timePartitioning: {
        type: 'DAY',
        field: 'timestamp',
    },
};
exports.bqInsertDisplayTimes = functions.https.onCall((rows) => {
    const bq = new bigquery_1.BigQuery();
    const dataset = bq.dataset('displaytimedata');
    const table = dataset.table(rows[0].agent);
    console.log('AGENT', rows[0].agent);
    console.log('bqinsertdisplaytimes rows:', rows);
    table
        .exists()
        .then(async (existsData) => {
        const exists = existsData[0];
        if (exists) {
            rows.forEach((row) => {
                delete row.agent;
                row.timestamp = new Date(row.timestamp);
                for (let key in row) {
                    if (Number.isNaN(row[key])) {
                        row[key] = null;
                    }
                }
            });
            table.insert(rows, {}, insertHandler);
            console.log('Rows inserted to existing table');
        }
        else {
            const [newTable] = await dataset.createTable(rows[0].agent, displayTimeTableOptions);
            console.log(`Table ${newTable.id} created with partitioning: `);
            console.log(newTable.metadata.timePartitioning);
            rows.forEach((row) => {
                delete row.agent;
                row.timestamp = new Date(row.timestamp);
                for (let key in row) {
                    if (Number.isNaN(row[key])) {
                        row[key] = null;
                    }
                }
            });
            newTable.insert(rows, {}, insertHandler);
            console.log('Row inserted to newly created table');
        }
    })
        .catch((error) => {
        console.log('Exists function error:', error);
    });
});
//# sourceMappingURL=index.js.map