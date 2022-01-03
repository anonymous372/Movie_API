var express = require('express')
var request = require('request')
var bodyParser = require("body-parser")

var app = express()
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs")

const PORT=3000

app.get("/results",function(req,res){
	var movie = req.query.movie.toLowerCase();
	var link  =	"https://www.omdbapi.com/?s="
				+ movie +
				"&apikey=b94fb41a"
	var dataa;
	request(link,function(err,resp,body){
		if(!err && resp.statusCode===200){
			var data = JSON.parse(body)["Search"]
			res.render("results",{data: data})
		}
	})
})

app.get("/",function(req,res){
	res.render("search")
})

app.listen(PORT,function(){
	console.log("Listening on : "+"http://localhost:"+PORT)
})

