const path = require("path");

function htmlRoutes(app) {
    //2 routes

    //survey page
    app.get("/survey", (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    //default USE route
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    //searched /Users/trixiesantoss/Desktop/Desktop files/UCSD201902FSF3-FT/13-express/Friendfinder/app/public/home.html

    //Friendfinder/app/public/survey.html
    //right /Users/trixiesantoss/Desktop/Desktop files/UCSD201902FSF3-FT/13-express/Friendfinder/app/routing/home.html'
}

module.exports = htmlRoutes;


