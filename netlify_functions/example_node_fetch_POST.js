const fetch = require('node-fetch');
const formHelpers = require('./helpers/formHelpers.js');
const API_ENDPOINT = 'https://api.url'; // process.env.{VARIABLE_NAME} can be used here - this will use .env.development on localhost

const headers =
    process.env.ENV === 'DEV'
        ? {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          }
        : {};

exports.handler = async (event) => {
    let data = JSON.parse(event.body);

    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
            body: formHelpers.generateFormData(data),
        };

        const response = await fetch(API_ENDPOINT, requestOptions);
        const responseData = await response.json();
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({responseData}),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({error: true, data: null}),
        };
    }
};
