//express is a web framework for building routes and  handling requests
//require() loads moduels and run immediate logic once dep. are ready
const express = require('express');
const app =  express(); //server core, creates new Express app instance

/*run json parser for each request made, provides middleware
puts json content in req body*/ 
app.use(express.json());
app.get('/status', (req,res)) => {
    res.json({
        status: 'Running',
        timestamp: new Data().toISOString()
    })
}