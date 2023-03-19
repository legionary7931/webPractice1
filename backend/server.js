const express = require("express");
const app = express(); 
const mongoose = require("mongoose"); // mongoose 모듈을 불러온다.
const port = 5000;
const bodyParser = require("body-parser"); //bodyparser 다운받기
const {User} = require("./models/User");
const dev = require("./config/dev");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.set('strictQuery',true)
mongoose.connect(dev.mongoURI, {dbName:"place"})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

app.post('/users/register', (req, res) => {
    const user = new User(req.body)
    //console.log(user)

    user.save()
    .then(doc => {
        if(!doc) return res.json({success : false, err})
        return res.status(200).json({
            success : true
        })
    })
})

app.listen(port, () => console.log("listening on port " + port))
