import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { DB } from "../..";

export class UserDB extends Model<
  InferAttributes<UserDB>,
  InferCreationAttributes<UserDB>
> {
  declare uid: CreationOptional<string>;
  declare email: string;
  declare password: string;
  declare token?: string;
}

UserDB.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
  },
  {
    sequelize: DB.sequelize,
    modelName: "User",
    createdAt: false,
    updatedAt: false,
    defaultScope: {
      attributes: { exclude: ["id"] },
    },
  }
);

UserDB.sync({ alter: true });
