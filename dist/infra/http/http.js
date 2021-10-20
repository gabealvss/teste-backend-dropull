"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./routes/router");
class Http {
    constructor(port) {
        this.http = (0, express_1.default)();
        this.port = port;
        this.http.use(express_1.default.urlencoded({ extended: true }));
        this.http.use(express_1.default.json());
        this.http.use("/api/v1/", router_1.router);
    }
    start() {
        try {
            this.http.listen(this.port);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}
exports.Http = Http;
