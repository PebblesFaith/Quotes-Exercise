

// Import the Express Library.
const express = require('express');//
const quotesApp = express();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('Quotes.db');

quotesApp.use(express.static('static_files'));

const port = 3000;

quotesApp.listen(port, function() {
    console.log('Server to Create Table is listening onto URL at http://localhost: ' + port + '.');
});


    
quotesApp.get('/users/:lastnameId', function(request, response) {
    // Matches ':userId' above.
    const lastnameToLookUp = request.params.lastnameId;
    // SQL Query
    db.all(
        'SELECT * FROM Quotism WHERE LastName = $LastName',
        // Parameters to pass into the SQL Query.
        {
        $LastName: lastnameToLookUp
        },      
  
        // Callback function to run when the Query finishes.
        function (err, rows) {
            console.log(rows);
            if (rows.length > 0) {
                response.send(rows[0]);
            }
            else {
                // Failed, so returns an empty object instead of underfined.
                response.send({});

            }

    });
    
});


quotesApp.get('/users', function(request, response) {
    db.all('SELECT LastName FROM Quotism', function (err, rows) {

        console.log(rows);
        const allUserNames = rows.map(e => e.LastName);
        console.log(allUserNames);
        response.send(allUserNames); 
    
    });    
});


// POST request is for posting new data to the server.
const bodyParser = require('body-parser');
// Connect to my web application.
quotesApp.use(bodyParser.urlencoded({extended: true}));
quotesApp.post('/users', function(request, response) {
    console.log(request.body);
    //response.send({});

    db.run(
        'INSERT INTO Quotism VALUES ($Quote, $FirstName, $LastName, $YearPublished, $AuthorPicture)',
        {
            $Quote: request.body.Quote,
            $FirstName: request.body.FirstName,
            $LastName: request.body.LastName,
            $YearPublished: request.body.YearPublished,            
            $AuthorPicture: request.body.AuthorPicture    
        },
        (err)  => {
            if (err) {
                response.send({message: 'error in app.post(/users)'});                
            }
            else {
                response.send({message: 'successfully run app.post(/users)'});
            }

        }

    );

});






