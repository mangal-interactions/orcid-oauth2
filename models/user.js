"use strict";

module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            isUrl: true,
            comment: "email of the user"
        },
        orcid: {
            type: DataTypes.STRING,
            unique: true
        },
        organization: {
            type: DataTypes.STRING
        },
        access_token: {
            type: DataTypes.STRING
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

    return users

};
