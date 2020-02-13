const express = require('express');
const app = express();

app.listen(80);

app.get('*/', function(req, res) {
    console.log("Post")
    console.log(req.url)
    res.send(req.url + "  hello  " + req.headers)
})
