const express = require('express');
const {spawn} = require('child_process');
const app = express();
const fs = require('fs');
const port = 3000;
app.get('/', (req, res) => {

    var summarizedText;
    //spawn new child process to call the python script, pass the string from the database
    // var dString;
    // fs.readFile('sample2.html',(err, data) => {
    //     if(err){
    //         console.error(err)
    //         return
    //     }
    //     dString = data.toString();
    //     console.log(dString)
    // });

    // here the articles can be fetched from the database and stored in a file
    // and filename passed to python in line 23 below, also line 23 can be called in a loo

    const pythonNlp = spawn('python', ['dnlp.py',"sample2.html"]);

    pythonNlp.stdout.on('data', function (data){
        console.log('Pipe data from python script');
        summarizedText = data.toString();
    });
    
    pythonNlp.stderr.on('data', (data) => {
        console.log(`child error: ${data}`);
    });

    pythonNlp.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser or do whatever you want to do with it.
        res.send(summarizedText);
    });

});

app.listen(port, () => console.log(`listening on port ${port}!`));