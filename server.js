var express = require('express');
var app =express();
var date = new Date().toString();
var middleWare={
	requireAuthntication: function  (req,res,next) {
		console.log('someone on site');
		next();
	},
	logger : function  (req,res,next) {
		console.log('Request:\n Time:' + date + '\n Type: ' + req.method + '\n URL: ' + req.originalUrl );
		next();
	}
};

app.use(middleWare.logger);

app.get ('/about',middleWare.requireAuthntication,function (req,res) {
	res.send('About US');
});
app.get('/',middleWare.requireAuthntication);
app.use(express.static(__dirname+'/public'));

app.listen(3000,function () {
	console.log('server is up' );
});
