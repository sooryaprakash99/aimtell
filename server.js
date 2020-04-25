
//An express js app to render the server

var express = require('express');
var app = express();

//Importing the static template which can be used dynamically in browser to pupulate table data
var siteListTemplate = require("./views/templates/siteList");

//Static path config for client side dependency files
app.use("/lib", express.static('lib'));

//Config for rendering the view using view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var templates = {};
templates.siteListTemplate = siteListTemplate;

//Rendering the default page with default values
app.get('/', function (req, res) {
    res.render('index', { sites: [], templates: siteListTemplate });
}); // index page 


app.listen(8080);
console.log('Portal is listening to port 8080 ');