var userAnswer = [];
var friendsConnectMembers = [];
var name, img, match;


$("#friendsConnectQuestions").submit(function(e) {
    e.preventDefault();
});


// event listener for survey page form
$('#formSubmit').on('click', function() {

    // get name and imgage inputs
    name = $('#usersName').val().trim();
    image = $('#usersImg').val().trim()

    // array that will hold users response
    userAnswer = [];

    // for each selected option we push the results into userAnswer array
    $('#friendsConnectQuestions option:selected').each(function() {
        userAnswer.push($(this).val());
    });

    // if the value for a select is equal to ''
    // we send the user and alert to fill in the array
    if (userAnswer.indexOf('') >= 0) {
        alert('Please answer all questions');
    
    // when all selects have been filled 
    // we begin to analize the users response 
    } else {
        // get request to retrieve presidents results
        $.get('/api').done(function(data) {
            var variance;
            var lowestVariance = 100

            // This loops over each character
            for (var i = 0; i < data.length; i++) {
                var friend = data[i];
                variance = 0;
                // This loops over each characters entire score and
                // compares them with the users score
                for (var j = 0; j < userAnswer.length; j++) {

                    // store variance between current friend with the users score
                    variance += Math.abs(parseInt(userAnswer[j]) - parseInt(friend.score[j]));
                }
                // if the most character had a lower variance the other character
                // lowestVariance becomes variance and 
                // match is equal to the index of the character
                if (variance < lowestVariance) {
                    lowestVariance = variance;
                    match = i;

                };
            };
            // calls function to show modal
            showBlock();

            function showBlock() {
                var newFriend = data[match];
                $('#friendsName').empty();
                if (match > 4)
                $('#friendsName').html(newFriend.name);
                $('#friendsImg').attr('src', newFriend.img);
                modal.style.display = "block";
                var user = {
                    'name': name,
                    'img': image,
                    'score': userAnswer
                }
                $.post('/api', user).done(function(data) {
                    console.log(data);
                })
            }
        });

    };
});



// Get the modal
var modal = document.getElementById('myModal');



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
