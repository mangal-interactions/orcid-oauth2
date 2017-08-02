module.exports = config = {
  // Config for Orcid
  authorizationURL: 'https://orcid.org/oauth/authorize',
  clientID: process.env.ORCID_CLIENTID,
  clientSecret: process.env.ORCID_CLIENTSECRET,
  tokenURL: 'https://pub.orcid.org/oauth/token',
  callbackURL: 'http://localhost:3000/auth/callback',
  scope: '/authenticate',
  passReqToCallback: true
};
