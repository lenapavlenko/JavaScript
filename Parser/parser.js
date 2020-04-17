const fs = require('fs');
const osmosis = require('osmosis');
let savedData = [];

osmosis
    .get('https://www.google.co.in/search?q=Data+Mining')
    .paginate('#foot table tr > td a[href]', 2)
    .find('#search')
    .find('.g .r')
    .set({
      'Name': 'h3',
      'Link': 'a@href'
    })
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
