//express is a web framework for building routes and  handling requests
//require() loads moduels and run immediate logic once dep. are ready
const express = require('express');
const app =  express(); //server core, initializes new Express app

app.use(express.json());
