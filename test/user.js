var db = require('../models');
var request = require('supertest');
var should = require('should')

beforeEach(function(done) {
    db.sequelize.sync({
        force: true
    }).then(function() {
        done();
    });
});

describe("Operation with users and login", function() {
    // TODO
});
