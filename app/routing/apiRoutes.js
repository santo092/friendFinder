
var user = require('../data/friends.js')


function apiRoutes(app) {

  //GET route with the url/api/friends
  app.get("/api/friends", (req, res) => {
    return res.json(friendsData)
  });

  // POST routes /api/friends
  app.post("/api/friends", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };

    var scoresArray = [];
    for (var i = 0; i < req.body.scores.length; i++) {
      scoresArray.push(parseInt(req.body.scores[i]))
    }
    newFriend.scores = scoresArray;

    var scoreComparisionArray = [];
    for (var i = 0; i < friendsData.length; i++) {

      var currentComparison = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
        currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);

      }
      scoreComparisionArray.push(currentComparison);
    };

    var bestMatchPosition = 0;
    for (var i = 1; i < scoreComparisionArray.length; i++) {
      if (scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]) {
        bestMatchPosition = i;
      }

      var bestFriendMatch = friendsData[bestMatchPosition];
      res.json(bestFriendMatch);

      friendsData.push(newFriend);
    }
  });
}

module.exports = apiRoutes;

