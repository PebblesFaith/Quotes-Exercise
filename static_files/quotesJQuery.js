$(doucment).ready(function(){
    console.log('Testing Server Browser in order to script JQuery AJAX.');


    $('#quoterProfileButton').click(function() {
        const requestURL = 'users/' + $('lastNameTextbox').val();
        console.log('Ms. Ajai you making an AJAX request to: ', requestURL);


            

        $.ajax ({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log('You have received successful!', data);

                // Apply Error Case, if analysis statement.
                if (data.LastName && data.AuthorPicture) {
                    $('#status').html('Ms. Ajai, you have successfully retrieve data at URL: ' + requestURL);
                    $('#lastNameTextbox').html("Quoter's Last Name: " + data.LastName);                    
                }
                else {
                    $('#status').html('ERROR: Ms. Ajai, your requested data could not be retrieved at URL: ' + requestURL);
                }

            }    

        });     
    });
});