module.exports = function(sequelize, DataTypes) {
  // Add code to not make it plural
    var Address = sequelize.define("Address", {
      id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      middleIntial: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      birthday: DataTypes.DATE,
      comments: DataTypes.STRING,
      userId: DataTypes.INTEGER
    }, {freezeTableName: true});
    return Address;
  };