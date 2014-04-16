
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.send("hi there ..");
};

exports.welcome = function(req, res){
  res.render('welcome', { data: 'Welcome to HBS' });
};