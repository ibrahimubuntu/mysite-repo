var express = require('express');
var app =express();
var middleWare = require('./middleWare.js');


app.use(middleWare.logger);

app.get ('/about',middleWare.requireAuthntication,function (req,res) {
	res.send('About US');
});
app.get('/',middleWare.requireAuthntication);
app.use(express.static(__dirname+'/public'));

app.listen(3000,function () {
	console.log('server is up' );
});
