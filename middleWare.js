
var middleWare={
	requireAuthntication: function  (req,res,next) {
		console.log('someone on site');
		next();
	},
	logger : function  (req,res,next) {
		console.log('Request:\n Time:' + new Date().toString()+ '\n Type: ' + req.method + '\n URL: ' + req.originalUrl );
		next();
	}
};

module.exports = middleWare;