'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Moderation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Moderation.belongsTo(models.Post);
      Moderation.belongsTo(models.User);
    }
  }
  Moderation.init({
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Post Id is required`
        },
        notEmpty: {
          msg: `Post Id is required`
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: `User Id is required`
        },
        notEmpty: {
          msg: `User Id is required`
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending",
      validate: {
        notNull: {
          msg: `Status is required`
        },
        notEmpty: {
          msg: `Status is required`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Moderation',
  });
  return Moderation;
};