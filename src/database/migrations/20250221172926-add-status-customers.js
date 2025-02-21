module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('customer', 'status', {
      type: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
      allowNull: false,
      defaultValue: 'ACTIVE',
    });
   },

   down: queryInterface  => {
    return queryInterface.sequelize.transaction();

    //return queryInterface.removeColumn('customers', 'status');
     },
 };

