import { RealEstateDB } from "database";
import { InferCreationAttributes, Optional } from "sequelize";

export type RealEstateBody = Optional<
  InferCreationAttributes<RealEstateDB, { omit: never }>,
  never
>;
