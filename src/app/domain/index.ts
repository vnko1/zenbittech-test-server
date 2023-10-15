import RealEstate from "./RealEstate/RealEstate";
import User from "./User/User";

type Controller = typeof RealEstate | typeof User;
const controllers = <any>[RealEstate, User];

export { controllers };
