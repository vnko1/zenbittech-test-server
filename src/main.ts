import "dotenv/config";
import { App } from "./infra/App";

const app = new App();

app.init();
