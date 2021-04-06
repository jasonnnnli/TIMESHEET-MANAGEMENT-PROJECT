const express = require('express');
const app = express();
const port = 3000;

const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));

const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const db = mongoose.connection;
const mongoDBURL = 'mongodb://127.0.0.1/db1';

mongoose.set('useCreateIndex', true);
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: { type: String, index: true, unique: true},
	password: {type: String, required: true},
	firstName: { type:String, required: true},
    lastName: { type:String, required: true},
    type: { type:String, required: true},
})

var timecardSchema = new Schema({
    date: {type: String},
    location: {type: String},
    sector: {type: String},
    doctor: {type: String},
    fileNumber: {type: String},
    timeIn: {type: String},
    timeOut: {type: String},
    hoursWorked: {type: Number},
    hourCode: {type: String},
    fbpPayroll: {type: String},
    amcoPayroll: {type: String},
})

var User = mongoose.model('User', userSchema)
var Timecard = mongoose.model('Timecard', timecardSchema)
mongoose.connect(mongoDBURL, {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var admin = new User ({username:'admin', password:'12', firstName:'', lastName:'', type:'admin'});
var doc1 = new User ({username:'doc1', password:'12', firstName:'Alice', lastName:'Smith', type:'doctor'});
var doc2 = new User ({username:'doc2', password:'12', firstName:'Bob', lastName:'Johnson', type:'doctor'});


var keyList = [];
app.post('/login/', (req,res) => { // login user. check cookie and compare pw in db
    let contentObj = req.body;
    let u = contentObj.username;
    let pw = contentObj.password;
    User.findOne({username: u}).exec(function(error,user){
        if (error) {
            console.log(":error",error);
            return;
        }
        if (user) {
            user.comparePassword(pw, function(err, isMatched){
                if (!isMatched) {
                    res.send('wrong user');
                    return;
                }
                let key = Math.floor(Math.random()*1000);
                keyList[u] = key;
                res.cookie('login', {username:u, key: key},{maxAge: 24*60*60*1000}); // 24hr session
                res.send('correct user');
            });
        }
        else {
            res.end('wrong user');
        }
    });
});

app.get('/users', (req,res) => {
    User.find({}).exec(function(error,results) {
		res.setHeader('content-type', 'application/json');
		res.send(results);	
	});
});

app.post('/add/user/', (req,res) => {
    // create json object from client request
    let contentObj = req.body;
    // use newly created object to add to db
    User.findOne({username: contentObj.username}).exec(function(err,user){
        if (user){
            res.end('user already existed');
            return;
        }
        else {
            let u = new User( {username: contentObj.username, password: contentObj.password,
                               firstname: contentObj.firstName, lastName: contentObj.lastName,
                               type: contentObj.type });
            console.log(u);
            u.save(function(err) {
                if (err) 
                    console.log(":err",err);
                res.end('user added'); // end response
            });
        }
    });
});
app.listen(port, () => {
    
  console.log(`Example app listening at http://localhost:${port}`)
})