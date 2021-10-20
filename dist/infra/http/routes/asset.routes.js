"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetRouter = void 0;
const express_1 = require("express");
const CreateAsset_1 = require("../../../controllers/CreateAsset");
const ListAssets_1 = require("../../../controllers/ListAssets");
const upload_1 = __importDefault(require("../middlewares/upload"));
const AssetRouter = (0, express_1.Router)();
exports.AssetRouter = AssetRouter;
AssetRouter.post("/", upload_1.default.single("image"), (req, res) => {
    return CreateAsset_1.createAssetController.exec(req, res);
});
AssetRouter.get("/", (req, res) => {
    return ListAssets_1.listAssetController.exec(req, res);
});
