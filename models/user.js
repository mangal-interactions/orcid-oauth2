"use strict";

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orcid: {
            type: DataTypes.STRING
        },
        organization: {
            type: DataTypes.STRING
        },
        access_token: {
            type: DataTypes.STRING
        },
        expired_in: {
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.ENUM,
            values: [
                "user",
                "curator",
                "administrator"
            ],
            defaultValue: "user",
            allowNull: false,
            comment: "The status of the user. Can be user, curator, or administrator."
        }
    }, {
        underscored: true
    })

    return user

};
