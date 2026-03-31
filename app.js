//express is a web framework for building routes and  handling requests
//require() loads moduels and run immediate logic once dep. are ready
const express = require('express');
const app =  express(); //server core, creates new Express app instance

/*run json parser for each request made, provides middleware
puts json content in req body*/ 
app.use(express.json());

//defining routing for get requests with /status path
app.get('/status', (req,res) => {
    res.json({
        status: 'Running', //sets response status to 'running'
        timestamp: new Date().toISOString()  //creates a timestamp with current time, converted to str
    });
});

/*assign which port server is listening to
if the process's environment port var is set, use that
otherwise port 3000 (default)*/ 
const PORT = process.env.PORT || 3000;

//starting the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
