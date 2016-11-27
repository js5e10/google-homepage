var express = require('express');
var app=express();
//set up template engine

app.set('view engine', 'ejs');
var todoController=require('./controllers/todoController')


app.use(express.static('./public'));

todoController(app);
app.listen(3000);
console.log('you are listening to port 3000!')
