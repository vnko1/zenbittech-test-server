import "dotenv/config";
import { App } from "./infra";

const app = new App();

app.init();
