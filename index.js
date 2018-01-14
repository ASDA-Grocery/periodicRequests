'use strict';

const express = require('express')
    , request = require('superagent')
    , bodyParser = require('body-parser')
    , { wordsToNumbers } = require('words-to-numbers')
    , app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

function periodicFn() {
   request
   .get('https://assistant.google.com/services/auth/handoffs/auth/start?account_name=asdagrocery@gmail.com&provider=groceryapp-b4d9c_dev&scopes=https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/calendar&return_url=https://www.google.com/')
   .then(function(res) {

   });
}

