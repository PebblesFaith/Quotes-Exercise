const express = require('express');
const quotesApp = express();

quotesApp.use(express.static('static_files'));

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('Quotes.db');

const port = 3000;
quotesApp.listen(port, function() {
    console.log('Server to Create Table is listening onto URL at http://localhost: ' + port + '.');
});

quotesApp.get('/quotes/:lastnameId', function(request, response) {
    // Matches the ':nameId' adove in order to link the sub root directory to the 'FirstName' column.
    const lastnameToLookUp = request.params.lastnameId;
    // SQL Query
    db.all (
        'SELECT * FROM Quotism WHERE LastName = $LastName',
        // Parameters to pass into SQL Query.
        {
        $LastName: lastnameToLookUp
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