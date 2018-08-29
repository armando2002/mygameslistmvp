var express = require('express');
var router = express.Router();
var games = {
    "my_games": [
        {
            "title": "Final Fantasy",
            "platform": "Nintendo",
            "status": "In Progress",
            "comments": "loremipsum",
            "dateAdded": 1470016976609,
            "lastPlayed":1470016976609
        },
        {
            "title": "Contra",
            "platform": "Nintendo",
            "status": "Not Started",
            "comments": "None",
            "dateAdded": 1470012976609,
            "lastPlayed":1470016976609
        },
        {
            "title": "Mega Man 1",
            "platform": "Nintendo",
            "status": "Completed",
            "comments": "Heck yea!",
            "dateAdded": 1470011976609,
            "lastPlayed":1470016976609
        },
        {
            "title": "Double Dragon",
            "platform": "Nintendo",
            "status": "In Progress",
            "comments": "This game is hard.",
            "dateAdded": 1470009976609,
            "lastPlayed":1470016976609
        }
    ]
}

/* GET games listing. */
router.get('/games', function(req, res, next) {
    res.json(games.my_games);
  });
/* GET games listing by platform. */
router.get('/games/:platform', function(req, res, next) {
    res.json(games.my_games);
  });  

// add in a PUT/UPDATE to add games to games JSON object
//router.delete('/games/:title', function(req,res,next) {
//    res.
//})

// add in a DELETE to delete games from the JSON object

// add function for pulling games list from DB

// add function for adding a game to DB

// add function for editing a game in DB

// add function for deleting a game in DB


module.exports = router;
