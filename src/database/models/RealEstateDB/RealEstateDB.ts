import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { DB } from "../..";

export class RealEstateDB extends Model<
  InferAttributes<RealEstateDB>,
  InferCreationAttributes<RealEstateDB>
> {
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
    imageUrl: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: DB.sequelize,
    modelName: "RealEstate",
    createdAt: false,
    updatedAt: false,
  }
);

RealEstateDB.sync({ alter: true });
