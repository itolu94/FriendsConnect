var express = require('express');
var router = express.Router();
var path = require('path');

var friendsConnectMembers = [{
    name: 'Sara Miles',
    img: 'http://static.metro.se/1f6/41d/277479h1024-LARGE.jpg',
    score: [2, 1, 4, 5, 3, 5, 2, 5, 2, 1]
}, {
    name: 'Thomas Jefferson',
    img: 'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/first-family/03_thomas_jefferson.jpg',
    score: [2, 1, 2, 3, 4, 1, 2, 3, 1, 1]

}, {
    name: 'Barack Obama',
    img: 'http://i.huffpost.com/gen/3135318/images/o-BARACK-OBAMA-THUMB-facebook.jpg',
    score: [1, 5, 4, 3, 5, 2, 3, 4, 4, 4]
}, {
    name: 'Donald Trump',
    img: 'http://static4.businessinsider.com/image/56c640526e97c625048b822a-480/donald-trump.jpg',
    score: [3, 1, 4, 2, 3, 5, 1, 5, 4, 2]
}];


router.get('/', function(req,resp) {

});


module.exports = router;