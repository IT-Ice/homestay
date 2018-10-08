/*
 * @Author: ice 
 * @Date: 2018-09-30 10:48:58 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-30 11:33:31
 */
module.exports = (sequelize, DataTypes) => sequelize.define(
    'goods',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumb_url: DataTypes.STRING,
    },
    {
      tableName: 'goods',
    },
  );