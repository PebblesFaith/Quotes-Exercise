
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

db.run('DELETE FROM Quotism WHERE Id = 7');