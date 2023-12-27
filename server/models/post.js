'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User)
      Post.belongsToMany(models.Category, { through: 'PostCategory' })
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Title is required`
        },
        notEmpty: {
          msg: `Title is required`
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending',
      validate: {
        notNull: {
          msg: `Status is required`
        },
        notEmpty: {
          msg: `Status is required`
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Content is required`
        },
        notEmpty: {
          msg: `Content is required`
        }
      }
    },
    UserId: {
      type: DataTypes.STRING,
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
    CategoryId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Category Id is required`
        },
        notEmpty: {
          msg: `Category Id is required`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};