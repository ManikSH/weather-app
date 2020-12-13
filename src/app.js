let path = require("path");
let express = require("express");
let app = express();
let hbs = require("hbs");
let location = require("./utils/app.js");

let publicDirPath = path.join(__dirname, "../public");
app.use(express.static(publicDirPath));

let partialsPath = path.join(__dirname, "../templates/partials");
let viewsPath = path.join(__dirname, "../templates/views");

hbs.registerPartials(partialsPath);

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
  });
});























app.get("/weather", (req, res) => {
  if (req.query.location) {
      location(req.query.location, (tempInDeg) => {
            res.send({ location: req.query.location, temperature: tempInDeg });
      });
  } else {
    res.send("Enter location address");
  }
});





















app.get("/help", (req, res) => {
  res.render("help", {
    name: "Manik",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/help/*", (req, res) => {
  res.render("404 page", {
    errorMessage: "No help article found",
  });
});

app.get("*", (req, res) => {
  res.render("404 page", {
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up at port 3000");
});
