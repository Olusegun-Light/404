const http = require ("http");
const express = require("express");
const morgan = require("morgan");
// const mongoose = require("mongoose");


const app = express();
app.listen(3002);
console.log("reguests made");

  app.set("view engine", "ejs");
  app.use(morgan("dev"));
  //takes all the url encoded data from the form and parses it into an object for use in the req object
  app.use(express.urlencoded({ extended: true }));
  // rendering static css files
  app.use(express.static("assets"));

  app.get("/404", (req, res) => {
    res.render("404", { title: "404 Page" });
  });

  app.use((req, res) => {
    res.status(404).render("404", { title: "404 Page" });
  });