var conf = require('../config/oauth');
var passport = require('passport')
var OAuth2Strategy = require('passport-oauth2').Strategy
const db = require('../models');


module.exports = function(passport) {

  // Set Authentification Strategy
  // configure oauth2 strategy for orcid use
  const oauth2 = new OAuth2Strategy(conf,
    function(req, accessToken, refreshToken, params, profile, cb) {
      console.log(params);
      db.user.findOrCreate({
          where: {
            name: params.name,
            orcid: params.orcid,
            access_token: params.access_token
          }
        })
        .spread(function(user, created) {
          console.log(user.get({
            plain: true
          }));
          console.log(created);
          return cb(null, user);
        });
    });

  passport.use(oauth2);

  // serialize & deserialize create information for the express-session that references a user in the database
  passport.serializeUser(function(user, cb) { // id store in cookie
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) { // retrieve id from cookie and perform id request on user table
    db.user.findById(id).then(function(profile) {
      var user = profile.get({
        plain: true
      });
      cb(null, user);
    });
  });

};