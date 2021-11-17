const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      name: DataTypes.STRING,
      imageUrl: {
        type: DataTypes.STRING,
      },
      imageUrl1: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rate: {
        type: DataTypes.ENUM(1, 2, 3, 4, 5),
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE(8, 2),
        allowNull: false,
      },
      discount: {
        type: DataTypes.DOUBLE(8, 4),
        allowNull: false,
      },
      writer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publisher: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      barcode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detail: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { tableName: "books", underscored: true }
  );

  return Book;
};
