const express = require("express");

const app = express();
const PORT = 8082;

// app.get("/", (req, res) => {
//   console.log("Current Route: /");
//   res.end();
// });

// app.get("/", (req, res) => {
//   res.write(`<h1>Hello</h1>`);
//   res.end();
// });

app.get("/", (req, res) => {
  res.send(`<h1>Hello</h1>`); //For sending data back
});


 

app.listen(PORT, () => {
    console.log("Listening at", PORT);
  });
  
