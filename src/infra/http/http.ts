import express from "express";
import { router } from "./routes/router";

class Http {
  private readonly http = express();
  private port: number;

  public constructor(port: number) {
    this.port = port;

    this.http.use(express.urlencoded({ extended: true }));
    this.http.use(express.json());
    this.http.use("/api/v1/", router);
  }

  public start(): boolean {
    try {
      this.http.listen(this.port);

      return true;
    } catch (e) {
      console.log(e);

      return false;
    }
  }
}

export { Http };
