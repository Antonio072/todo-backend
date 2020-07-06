'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {

   await queryInterface.bulkInsert('tasks',[
     {  description : 'Task1', id : null, createdAt:new Date(), updatedAt:new Date()  },
     {  description : 'Task2', id : null, createdAt:new Date(), updatedAt:new Date()  },
     {  description : 'Task3', id : null, createdAt:new Date(), updatedAt:new Date()  },
     {  description : 'Task4', id : null, createdAt:new Date(), updatedAt:new Date()  },
     {  description : 'Task5', id : null, createdAt:new Date(), updatedAt:new Date()  },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tasks', null, {})
  }
};
