
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.sendfile('./views/index.html');
};

exports.profileList = function(req, res){
  res.sendfile('./views/profile/index.html');
};

exports.profileUser = function(req, res){
  var profile = req.param("name");
  console.log(req.param("name"));
  res.sendfile('./views/profile/'+profile);
};