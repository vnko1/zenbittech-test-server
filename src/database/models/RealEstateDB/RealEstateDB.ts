import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { DB } from "../..";

export class RealEstateDB extends Model<
  InferAttributes<RealEstateDB>,
  InferCreationAttributes<RealEstateDB>
> {
  // declare _id: string;
  declare title: string;
  declare price: number;
  declare tiket: number;
  declare yield: number;
  declare days: number;
  declare sold: number;
  declare imageUrl: string;
}

RealEstateDB.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 6500000,
    },
    tiket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 60000,
    },
    yield: {
      type: DataTypes.REAL(11, 12),
      allowNull: false,
      defaultValue: 9.25,
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 150,
    },
    sold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 75,
    },
    // _id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV1,
    // },
    imageUrl: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: DB.sequelize,
    modelName: "RealEstate",
    createdAt: false,
    updatedAt: false,
    // defaultScope: {
    //   attributes: { exclude: ["id"] },
    // },
  }
);

RealEstateDB.sync({ alter: true });
