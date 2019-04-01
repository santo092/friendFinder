
var friendsData = require('../data/friends.js')


module.exports = (app) => {

  //GET 
  app.get("/api/friends", (req, res) => {
    res.json(friendsData)
  });

  // POST 
  app.post("/api/friends", (req, res) => {
    console.log("posted");
   
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };

    //create a new array for the user, pushing it onto the main array that is displayed
    var scoresArray = [];
    for (var i = 0; i < req.body.scores.length; i++) {
      scoresArray.push(parseInt(req.body.scores[i]))
    }
    newFriend.scores = scoresArray;

    //used an array to compare score differences. 
    //pushing currentComparison to scoreComparison
    var scoreComparisionArray = [];
    for (var i = 0; i < friendsData.length; i++) {

      var currentComparison = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
        currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);

      }
      scoreComparisionArray.push(currentComparison);
    };

    //displaying best match for modal using scoreComparison
    var bestMatch = 0;
    for (var i = 1; i < scoreComparisionArray.length; i++) {
      if (scoreComparisionArray[i] <= scoreComparisionArray[bestMatch]) {
        bestMatch = i;
      }

      var bestMatch = friendsData[bestMatch];
      res.json(bestMatch);

      friendsData.push(newFriend);
    }
  });
}


