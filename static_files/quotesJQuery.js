$(document).ready(function() {
    console.log('Testing Server Browser in order to script JQuery AJAX.');


    $('#quoterProfileButton').click(function() {
        const requestURL = 'users/' + $('lastNameTextbox').val();
        console.log('Ms. Ajai, you making an AJAX request to: ', requestURL);
            

        $.ajax ({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log('You have received successful!', data);

                // Apply Error Case, if statement is analysis.
                if (data.LastName && data.AuthorPicture) {
                    $('#status').html('Ms. Ajai, you have successfully retrieve data at URL: ' + requestURL);
                    $('#QuoteDiv').html("Quoter's Last Name: " + data.Quote);
                    $('#QuoterImage').attr('src', data.AuthorPicture).arttr('width', '300px');                    
                }
                else {
                    $('#status').html('ERROR: Ms. Ajai, your requested data could not be retrieved at URL: ' + requestURL);
                    $('#QuoteDiv').html(' ');
                    $('#QuoterImage').attr('src', ' ').attr('width', '0px');    

                }

            }    

        });     
    });

        $('#allQuoterButton').click(function() {
            $.ajax ({
                url: 'users/',
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    console.log('You have received data!', data);
                    $('#status').html('All users: ' + data);
                }
        });

    });

});
