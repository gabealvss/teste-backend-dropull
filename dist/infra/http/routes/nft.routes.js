"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTRouter = void 0;
const express_1 = require("express");
const CreateNFT_1 = require("../../../controllers/CreateNFT");
const ListNFTs_1 = require("../../../controllers/ListNFTs");
const NFTRouter = (0, express_1.Router)();
exports.NFTRouter = NFTRouter;
NFTRouter.post("/", (req, res) => {
    return CreateNFT_1.createNftController.exec(req, res);
});
NFTRouter.get("/", (req, res) => {
    return ListNFTs_1.listNFTsController.exec(req, res);
});
