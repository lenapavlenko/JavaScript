const fs = require('fs');
const osmosis = require('osmosis');
let savedData = [];
osmosis

    .get('https://www.google.co.in/search?q=Data+Mining')
    .find('#botstuff')
    .set({'Data Mining': ['.card-section .brs_col p a']})
    .data(function(data) {
        console.log(data);
        savedData.push(data);
    })
   .done(function() {
      fs.writeFile('data.json', JSON.stringify( savedData, null, 4), function(err) {
        if(err) console.error(err);
        else console.log('Data Saved to data.json file');
      })
   });