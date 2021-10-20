"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
const uuid_1 = require("uuid");
class Asset {
    constructor(properties, id) {
        Object.assign(this, properties);
        if (!id) {
            this.id = (0, uuid_1.v4)(); // Lidamos com a geração de ID aqui, independente do banco de dados ou ORM sempre vai funcionar
        }
    }
}
exports.Asset = Asset;
