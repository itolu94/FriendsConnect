var userAnswer = [];
var match;
var name; 


$('#startQuiz').on('click', function() {
   name = $('#usersName').val().trim();
   email = $('#usersImg').val().trim();
   console.log(name);
   // window.open('http://localhost:4133/presidentsurvey');
});



$("#friendsConnectQuestions").submit(function(e) {
    e.preventDefault();
});

$('#startQuiz').submit(function(e) {
    e.preventDefault();
    console.log('Something worked');
});


$('#formSubmit').on('click', function() {
    userAnswer = [];
    $('#friendsConnectQuestions option:selected').each(function() {
        userAnswer.push($(this).val());
    });
    if (userAnswer.indexOf('') >= 0) {
        alert('Please answer all questions');
    } else {
        var variance;
        var lowestVariance = 100
        for (var i = 0; i < friendsConnectMembers.length; i++) {
            var friend = friendsConnectMembers[i];
            variance = 0;
            for (var j = 0; j < userAnswer.length; j++) {
                variance += Math.abs(parseInt(userAnswer[j]) - parseInt(friend.score[j]));
            }
            if (variance < lowestVariance) {
                lowestVariance = variance;
                match = i;

            };
        };
        showBlock();
    };
});



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


function showBlock() {
    var newFriend = friendsConnectMembers[match];
    $('#friendsName').empty();
    $('#friendsImg').empty();
    $('#friendsName').html(newFriend.name);
    $('#friendsImg').attr('src', newFriend.img);
    modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

