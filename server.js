//dependencies
const express = require("express");


//======EXPRESS configuration=========
//create an express server
const app = express();
//creating a port so it can be used later for the listener
const PORT = process.env.PORT || 3000;

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// you can use this to server static
app.use(express.static('public'));


//maps
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//listener
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});