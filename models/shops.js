/*
 * @Author: ice 
 * @Date: 2018-09-30 10:29:14 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-30 11:33:58
 */
module.exports = (sequelize, DataTypes) => sequelize.define(
    'shops',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumb_url: DataTypes.STRING,
    },
    {
      tableName: 'shops',
    },
  );