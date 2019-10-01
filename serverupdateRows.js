const express = require('express');
const quotesApp = express();

quotesApp.use(express.static('static_files'));

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('Quotes.db');

const port = 3000;
quotesApp.listen(port, function() {
    console.log('Server to Create Table is listening onto URL at http://localhost: ' + port + '.');
});

// POST request is for posting new data to the server.
const bodyParser = require('body-parser');
// Connect to my web application.
quotesApp.use(bodyParser.urlencoded({extended: true}));
quotesApp.post('/quotes', function(request, response) {
    console.log(request.body);
    //response.send({});

    db.run(
        'UPDATE Quotism SET AuthorPicture = "Mill.jpg" WHERE AuthorPicture = "Mil.jpg")',
        function (err) {
            if (err) {
                response.send({message: 'error in app.update(/quotes)'});                
            }
            else {
                response.send({message: 'successfully run app.update(/quotes)'});
            }
        });
        

});













