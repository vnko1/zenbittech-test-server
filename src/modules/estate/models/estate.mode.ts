import { AllowNull, Column, Default, Model, Table } from 'sequelize-typescript';

@Table({
  createdAt: false,
  updatedAt: false,
})
export class Estate extends Model {
  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Default(6500000)
  @Column
  price: number;

  @AllowNull(false)
  @Default(60000)
  @Column
  tiket: number;

  @AllowNull(false)
  @Default(9.25)
  @Column
  yield: number;

  @AllowNull(false)
  @Default(9.25)
  @Column
  days: number;

  @AllowNull(false)
  @Default(75)
  @Column
  sold: number;

  @AllowNull(false)
  @Column
  imageUrl: string;
}
