import { RealEstateDB } from "database";
import { InferCreationAttributes, Optional } from "sequelize";

export type RealEstateBody = Optional<
  InferCreationAttributes<RealEstateDB, { omit: never }>,
  never
>;

export interface IRealEstate {
  id: number;
  title: string;
  price: number;
  tiket: number;
  yield: number;
  days: number;
  sold: number;
  imageUrl: string;
}
