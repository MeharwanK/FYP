const axios = require('axios');
const client = require('./models/client.model.js')
const organizer = require('./models/organizer.model.js')

const dataApiUrl = 'https://ap-south-1.aws.data.mongodb-api.com/app/data-zqpwp/endpoint/data/v1';
const apiKey = 'WIXC2R0K0gYpiE6AWxCtAO5iLOW0eKtc6HZWuOIXzcoDMC7Aa5PM7LBrG6GFruIX';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': apiKey,
};

const payload = {
    collection: 'client',
    database: 'Eventify-Backend',
    dataSource: 'BackendDB',
    document: {
        // Your document to insert
        client_name: "Meharwan Wadhwani",
        client_email:"meharwan@gmail.com",
        client_password: "wadhwani",
        client_cnic: 5340386830645,
        client_username: "meharwanW",
        client_phone: 3488365045
        
    },
    
}





axios.post(`${dataApiUrl}/action/insertOne`, payload, { headers })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

// axios.post(`${dataApiUrl}/action/insertOne`, payload2, { headers })
//     .then(response => console.log(response.data))
//     .catch(error => console.error(error));

// axios.post(`${dataApiUrl}/action/findOne`, findPayload, { headers })
//     .then(response => console.log("data is Posted", response.data))
//     .catch(error => console.error("Goes to Error" ,error.response?error.response.data:error.message));