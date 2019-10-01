const express = require('express');
const quotesApp = express();

quotesApp.use(express.static('static_files'));

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('Quotes.db');

const port = 3000;
quotesApp.listen(port, function() {
    console.log('Server to Create Table is listening onto URL at http://localhost: ' + port + '.');
});

db.serialize (function() {
   
    db.run('INSERT INTO Quotism (Quote, FirstName, LastName, YearPublished, AuthorPicture) VALUES ("A person may cause evil to others not only by his action but by his inactions, and in either case, he or she is justly accountable.", "John Stuart", "Mill", "1852" , "Mil.jpg")');

    console.log('Ms. Ajai has successfully created the "Quotism" table in "Quotes.db" database.');

    //Print 'Quotism' table onto console; in order to verify, if inserted data were scripted in SQLite3 module Query language correctly. 
    db.each('SELECT Id, Quote, FirstName, LastName, YearPublished, AuthorPicture FROM Quotism',
    function(err, rows) {
        if (err) {
            console.log('Ms. Ajai has not successfully scripted, her SQLite3 "SELECT" Query Language correctly and she will need to try again.');
        }
        else {
            console.log('|' + rows.Id + '|' + rows.Quote + '|' + rows.FirstName + '|' + rows.LastName + '|' + rows.YearPublished + '|' + rows.AuthorPicture + '|');
        }
    });
});

db.close();


