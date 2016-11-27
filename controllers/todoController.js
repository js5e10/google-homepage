var bodyParser=require('body-parser');


module.exports =function(app){
  app.get('/google', function(req,res){
      res.render('google');

  });

};
