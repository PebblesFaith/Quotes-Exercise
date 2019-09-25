const express = require('express');
const quotesApp = express();

quotesApp.use(express.static('static_files'));

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('Quotes.db');

const port = 3000;
quotesApp.listen(port, function() {
    console.log('Server to Create Table is listening onto URL at http://localhost: ' + port + '.');
});

quotesApp.get('/quotes/:yearId', function(request, response) {
    // Matches the ':yearId' adove.
    const yearToLookUp = request.params.yearId;
    // SQL Query
    db.all (
        'SELECT * FROM Quotism WHERE YearPublished = $YearPublished',
        // Parameters to pass into SQL Query.
        {
        $YearPublished: yearToLookUp
        },
        // Callback function to run when Query finishes.
        function (err, rows) {
            console.log(rows)
                if(rows.length > 0) {
                    response.send(rows[0]);
                }
                else {
                    //Failed, so return an empty object instead of undefined
                    response.send({});
                }
        });
});