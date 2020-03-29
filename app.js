const express= require('express')
const app=express()
console.log('Page started')

const body=require('body-parser')
const url=body.urlencoded({extended:true})
console.log('body parser acquired')

var multer= require('multer')

var mp3Duration = require('mp3-duration');

app.set("view engine",'ejs')

app.use('/stuff',express.static('stuff'))

/*var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));
console.log(publicDir);*/

var publicDir = require('path').join(__dirname,'');
app.use(express.static(publicDir));
console.log("Public Dir = "+publicDir);

var storage=multer.diskStorage({
	destination: function(req,musicFile,cb) {
		cb(null,'public/uploads/')
	},
	filename:function(req,musicFile,cb) {
		let ext=musicFile.originalname
		let filename=ext

		cb(null, filename)
	}
})


var singleUploads=multer({storage:storage}).single('musicFile')

app.get('/',(req,res)=>{
	res.render('index',{n:0,name:null,duration:null,destination:null});
})

app.post('/',singleUploads,(req,res)=>{
	var a=req.file.originalname;
	var b=a.split(".");
	var c=req.file.path;
	c=c.split("\\");
	c=c[0]+'/'+c[1]+'/'+c[2];
	console.log(c);
	req.file.path=c;
// 	mp3Duration('a', function (err, duration) {
//   	console.log('Your file is ' + duration + ' seconds long');
// });
	console.log(req.file)
	res.render('index',{n:1,name:b[0],duration:null,destination:c})
})

app.listen(3000);