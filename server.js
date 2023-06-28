const express = require("express");
const fs = require("fs");

const app = express();

app.get("/cities", (req, res) => {
  fs.readFile("./data/cities.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving data");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

const port = 9000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
