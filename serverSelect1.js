const express = require('express');
const quotesApp = express();

quotesApp.use(express.static('static_files'));

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('Quotes.db');

const port = 3000;
quotesApp.listen(port, function() {
    console.log('Server to Create Table is listening onto URL at http://localhost: ' + port + '.');
});

quotesApp.get('/quotes', function(request, response) {
    db.all('SELECT YearPublished, Quote FROM Quotism', function(err, rows) {
    
        console.log(rows);
        const allYears = rows.map(e => e.YearPublished);
        console.log(allYears);
        response.send(allYears);
           
       
    });
   
});
