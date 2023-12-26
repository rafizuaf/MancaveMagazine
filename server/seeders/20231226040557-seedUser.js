'use strict';

const { hashPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let users = require('../users.json').map((user) => {
      delete user.id;
      user.password = hashPassword(user.password);;
      user.createdAt = user.updatedAt = new Date();
      return user;
    })
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
