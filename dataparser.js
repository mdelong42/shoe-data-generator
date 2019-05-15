const fs = require('fs');

fs.readFile('./shoes.csv', 'utf8', (err, fileRes) => {
    if (err) {
        console.log('error reading file');
    } else {
        const shoeArray = [];
        const rows = fileRes.split('\n');
        const headers = rows[1].split(',');

        for (let i = 2; i < rows.length; i++) {
            let currShoe = {};
            let shoeDesc = rows[i].split(',');

            for (let j = 0; j < shoeDesc.length; j++) {
                currShoe[headers[j]] = shoeDesc[j];

                if (headers[j] === 'images') {
                    currShoe[headers[j]] = shoeDesc[j].split(' ');
                }
                // need to add reviews column to data (reviews: [{user: STRING, date: DATE, stars: NUMBER, title: STRING, description: STRING},...]);
            }
            shoeArray.push(currShoe);
        }
        console.log(shoeArray);
    }
});
