import { Http } from "./infra/http/http";
import * as dotenv from "dotenv";

dotenv.config();

const http = new Http(parseInt(process.env.HTTP_PORT) || 4000);

http.start();
