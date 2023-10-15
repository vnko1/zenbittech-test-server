import { ValidateBody } from "./ValidateBody/ValidateBody";
import { NotFound } from "./NotFound/NotFound";
type Middleware = typeof ValidateBody | typeof NotFound;

const middlewares = <Middleware[]>[ValidateBody, NotFound];

export { middlewares };
export { ValidateBody };
