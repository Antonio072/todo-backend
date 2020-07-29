'use strict';

const bcrypt = require("bcrypt")
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  /**
   * Asignacion basica : DataTypes.STRING
   * Mas avanzada : JSON
   */
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.prototype.authenticatePassword = function (password) {

    return new Promise((res, rej) => {

      bcrypt.compare(password, this.password_hash, function (err, valid) {

         if(err) return rej(err)
         return res(valid)
      })
    })

  }


  User.login = function (email, password) {

    return User.findOne({
      where: { email : email }
    }).then(user => {
      if(!user) return null;
      return user.authenticatePassword(password).then(valid=>valid ? user : null)

    })

  }

  User.beforeCreate((user, options) => {

    return new Promise((res, rej) => {
      if (user.password)
        bcrypt.hash(user.password, 10, function (error, hash) {
          user.password_hash = hash
          res();
        })


    })
  })
  return User;
}; 