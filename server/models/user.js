'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Username is required`
        },
        notEmpty: {
          msg: `Username is required`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Password is required`
        },
        notEmpty: {
          msg: `Password is required`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: `Email has already been registered, please use another email`
      },
      allowNull: false,
      validate: {
        notNull: {
          msg: `Email is required`
        },
        notEmpty: {
          msg: `Email is required`
        },
        isEmail: {
          msg: `Please enter a valid email address`
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "author",
      validate: {
        notNull: {
          msg: `Role is required`
        },
        notEmpty: {
          msg: `Role is required`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};