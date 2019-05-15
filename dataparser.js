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

                if (headers[j] === 'Images') {
                    currShoe[headers[j]] = shoeDesc[j].split(' ');
                }
            }
            shoeArray.push(currShoe);
        }
        console.log(shoeArray);
    }
});
