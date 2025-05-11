const http = require("http");
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

app.post("/validate-password", (req, res) => {
  const { password } = req.body;
  if (password === "K#V6rnDn&5n6Z*") {
    res.redirect("/dashboard");
  } else {
    res.render("404", { title: "404 Page", error: "Password fails" });
  }
});


app.get("/404", (req, res) => {
  res.render("404", { title: "404 Page" });
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    name: "Juan Sebastian Martin Fernandez",
    pdfUrl: "/assets/doc/PJST11_2_552.pdf",
  }); // Adjust PDF URL as needed
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 Page" });
});


