//1. Data Pipeline Ingestion, Using Json Format!

function ingestData(patientID, age, medicalrecordID, https_source) {
    const patientsDataMap = new Map();
    
    for (let i = 0; i < patientID.length; i++) {
       
        const patientData = {
            age: age[i],
            medicalrecordID: medicalrecordID[i],
            https_source: https_source[i]
        };

        patientsDataMap.set(patientID[i], patientData);
    }
    
    return patientsDataMap;
}

const patientID = ['Jason Peter'];
const age = [33];
const medicalrecordID = ['1000347'];
const https_source = ['kaiserpermanente.org'];

console.log('Patients Data Pipeline:');
console.log(ingestData(patientID, age, medicalrecordID, https_source));


// 2. Data Processing Here, & Error Handling

function processPatientsrecord(record, hippa){
    return new Promise((resolve, reject) => {
        if (record === 'Private' && hippa === 'Approved'){
            setTimeout(() => {
                resolve('Patient record is sealed');
            }, 1000);
        }

        else if (record === 'At risk' && hippa === 'Violated'){
            reject('Lock Down patient record!')
        }

        else {
            resolve('Patient Medical Record Secured!');
        }
    });
     
}

processPatientsrecord('Private', 'Approved')
    .then(message => console.log(message))
    .catch(error => console.log(error));

//3. Compliance & Security Processes Here

function grantAccess(usersID, usersname, password){
    if (usersID[0].includes('JeMa') && usersname[0].includes('@') && password.includes('@')){
        return ('Access Approved');
    }

    else {
        return ('Deny Access!');
    }
}

let usersID = ['Jerry Maddison'];
let usersname = ['eric@cybersystem.ord'];
let password = ['@madij90llp']

console.log(grantAccess(usersID, usersname, password));

//4. Output Integration + data base fetch request Here

function getMedicalbill(message, queue){

    const messageobj = { 'message': message[0], 'queue': queue[0] };

    console.log(messageobj);
    console.log(queue);


}

let message = ['Patient Physical reminder'];
let queue = ['Waiting for Appointment booking'];


getMedicalbill(message, queue);
