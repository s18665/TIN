const express = require('express');
const app = express();

app.set('views', '/views');
app.set('view engine', 'ejs');

app.get('/hello', function(req, res){
    res.send("hello world!");
})

app.get('/form', function(req, res){
    res.sendFile(__dirname + '/views/form.html');
})
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/formdata', function(req, res){
    console.log(req.body);
    res.render(__dirname + '/views/formdata.pug', {firstname:req.body.firstname, surname:req.body.surname, email:req.body.email})
});


app.post('/jsondata', function(req, res){
    console.log(req.body);
    res.render(__dirname + '/views/jsondata.pug', {data : (req.body)});
})


app.listen(3000, ()=> console.log("server is running"))