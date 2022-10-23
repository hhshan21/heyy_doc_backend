await queryInterface.changeColumn("users", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: 1,
      isAlpha: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: 2,
      isAlpha: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: 4,
        msg: "Password must be more than 4 characters",
      },
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  drugAllergies: {
    type: Sequelize.JSONB,
    allowNull: true,
    validate: {
      isAlpha: true,
    },
  },
  isDoctor: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  doctorInfo: {
    type: Sequelize.JSONB,
    allowNull: true,
  },
});
/**
 * Add altering commands here.
 *
 * Example:
 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
 */
},

async down(queryInterface, Sequelize) {
await queryInterface.changeColumn("users", {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  drugAllergies: {
    type: Sequelize.JSONB,
  },
  isDoctor: {
    type: Sequelize.BOOLEAN,
  },
  doctorInfo: {
    type: Sequelize.JSONB,
  },
});