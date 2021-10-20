"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = void 0;
const uuid_1 = require("uuid");
class NFT {
    constructor(properties, id) {
        Object.assign(this, properties);
        if (!id) {
            this.id = (0, uuid_1.v4)(); // Lidamos com a geração de ID aqui, independente do banco de dados ou ORM sempre vai funcionar
        }
    }
}
exports.NFT = NFT;
