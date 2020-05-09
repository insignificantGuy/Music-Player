const express = require('express')
const app = express()
console.log('Page Started')

const body = require('body-parser')
const url = body.urlencoded({ extended: false })
console.log('Body Parser Acquired')

var multer = require('multer')
console.log('Multer Acquired')

var _ = require('lodash')
console.log("Lodash required")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/music', { useNewUrlParser: true });
console.log('Databse Connected');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const musicdata = new Schema({
	ido:  String,
    name: String,
    path: String
})

const musicmodel = mongoose.model("music", musicdata)

const logindata = new Schema({
    username: String,
    email: String,
    password: String
})

const loginmodel = mongoose.model("login", logindata)

app.set("view engine", 'ejs')

app.use('/stuff', express.static('stuff'))

var publicDir = require('path').join('');
app.use(express.static(publicDir));

var storage = multer.diskStorage({
    destination: function(req, musicFile, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function(req, musicFile, cb) {
        let ext = musicFile.originalname
        let filename = ext

        cb(null, filename)
    }
})


var singleUploads = multer({ storage: storage }).single('musicFile')

app.get('/', (req, res) => {
    res.render('login', { message: null })
});

app.post('/', url, (req, res) => {
    var a = req.body.username;
    var b = req.body.password;
    var c = req.body.email;

    if (req.body.register) {
        loginmodel.find({ username: a, password: b }, (err, doca) => {
            if (err) {
                console.log(err)
            } else {
                if (_.isEmpty(doca)) {
                    let newlogin = new loginmodel()
                    newlogin.username = a
                    newlogin.password = b
                    newlogin.email = c
                    newlogin.save(function(err) {
                        if (err) {
                            console.log("Database not Saved")
                        } else 
                        {
                          res.render('login', { message: "User Registered" })
                        }
                    })
                }
                else{
                }
            }
        })
    }
    if (req.body.login) {
        console.log("This started")
        loginmodel.find({ username: a, password: b }, function(err, docs) {
            if (err) {
                console.log("It's an error fetching data")
                res.render('login', { message: "An unexpected error occured" })
            }
            console.log(docs)
            if(_.isEmpty(docs)){
           	res.render('login',{message:'Incorrect Email or Password'})
           }else{
            res.redirect('/' +docs[0]._id)
        }
        });
    }
});

app.get('/:doc', (req, res) => {
    musicmodel.find({ido:req.params.doc}, (err, docs) => {
        res.render('index', { n: docs, name: docs, destination:docs,docs: docs });
    })
})

app.post('/:doc', singleUploads, (req, res) => {
    var a = req.file.originalname;
    var b = a.split(".");
    var c = req.file.path;
    c = c.split("\\");
    c ="public/"+c[1] + '/' + c[2];
    if (req.body.submit) {
        let newmusic = new musicmodel()
        newmusic.name = b[0]
        newmusic.path = c
        newmusic.ido=req.params.doc
        newmusic.save(function(err) {
            if (err) {
                console.log("Databse Save Error")
                return
            }
        });
    }
    res.redirect('/'+req.params.doc)
})

app.listen(3000);