'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let categories = require('../categories.json').map((category) => {
      delete category.id;
      category.createdAt = category.updatedAt = new Date();
      return category;
    })
    await queryInterface.bulkInsert("Categories", categories, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Categories", null, {});
    
  }
};
