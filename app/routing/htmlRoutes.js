const path = require("path");

module.exports = (app) => {
    //2 routes

    //survey page
    app.get("/survey", (req, res) => {
        //console.log(__dirname);
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });


    //default USE route
    app.get("*", (req, res) => {
       //console.log(__dirname);
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    
}




