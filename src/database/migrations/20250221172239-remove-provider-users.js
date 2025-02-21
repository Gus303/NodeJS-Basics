module.exports = {
 up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {id: Sequelize.INTEGER});
  }
};
