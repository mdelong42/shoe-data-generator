const fs = require("fs");
const { reviews } = require("./reviews");
const { descriptions } = require("./descriptions");

fs.readFile("./shoes.csv", "utf8", (err, fileRes) => {
  if (err) {
    console.log("error reading file");
  } else {
    const shoeArray = [];
    const rows = fileRes.split("\n");
    const headers = rows[1].split(",");

    for (let i = 2; i < rows.length; i++) {
      let currShoe = {};
      let shoeDesc = rows[i].split(",");

      for (let j = 0; j < shoeDesc.length; j++) {
        currShoe[headers[j]] = shoeDesc[j];

        if (headers[j] === "images") {
          currShoe[headers[j]] = shoeDesc[j].split(" ");
        }
        currShoe["reviews"] = reviews;
        currShoe["colors"] = [
          "white",
          "black",
          "red",
          "orange",
          "yellow",
          "pink",
          "grey",
          "green",
          "magenta",
          "brown",
          "silver",
          "tan",
          "rainbow",
          "gold",
          "purple",
          "neon"
        ];
        // need to add reviews column to data (reviews: [{user: STRING, date: DATE, stars: NUMBER, title: STRING, description: STRING},...]);
        currShoe["sizes"] = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];
        let randomDesc = Math.floor((descriptions.length* Math.random()));
        currShoe["description"] = descriptions[randomDesc];
      }
      shoeArray.push(currShoe);
    }
    console.log(shoeArray);
  }
});
