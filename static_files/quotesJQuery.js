$(document).ready(function() {
    console.log('Testing Server Browser in order to script JQuery AJAX.');

    $('#quoterProfileButton').click(function() {
        const requestURL = 'users/' + $('#lastNameTextbox').val();
        console.log('You are making an AJAX request to: ', requestURL);

        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log('You have received some data!', data);

                // Apply Error Case if statement analysis.
                if (data.Quote && data.AuthorPicture) {
                    console.log('You have successfully retrieve data at URL: ' + requestURL);
                    $('#LastNameDiv').html("Quoter's Last Name: " + data.LastName);
                    $('#QuoteDiv').html("Quote: " + data.Quote);
                    $('#QuoterImage').attr('src', data.AuthorPicture).attr('width', '300px');
                }
                else {
                    $('#status').html('ERROR: You have requested data could not be retrieved at URL: ' + requestURL);
                    $('#LastNameDiv').html('');
                    $('#QuoteDiv').html('');
                    $('#QuoterImage').attr('src', '').attr('width', '0px');
                }
            }
        });

    });

    $('#allquotersProfileButton').click(function() {
        $.ajax({
            url: 'users/',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log('You have received some data!', data);
                $('#status1').html('List of all Last Name Quoters: ' + data);
            }
        });
    });


    $('#quoterInsertProfileButton').click(function() {
        console.log('Selected insert button had been clicked!');
        $.ajax({
            url: 'users',
            type: 'POST',
            data: {
                Quote: $('#quoteTextarea').val(),
                FirstName: $('#firstNameTextbox').val(),
                LastName: $('#lastNameTextbox').val(),
                YearPublished: $('#yearPublishedTextbox').val(),
                AuthorPicture: $('#authorPictureTextbox').val(),
            },
            success: function(data) {
                $('#status2').html(data.message);
            }
        });
    });







  



















});




