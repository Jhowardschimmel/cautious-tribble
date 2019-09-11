var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//create and require routes file below
require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
module.exports = app;
