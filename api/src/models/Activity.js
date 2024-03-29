const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5
        }
    },
    duration: {
        type: DataTypes.STRING
    },
    season: {
        type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring")
    }
  }, { timestamps: false });
};