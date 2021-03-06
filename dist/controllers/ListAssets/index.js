"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAssetController = exports.listAssetCase = void 0;
const PrismaAssetRepository_1 = require("../../repositories/implementation/PrismaAssetRepository");
const ListAssetController_1 = require("./ListAssetController");
const ListAssetUseCase_1 = require("./ListAssetUseCase");
const prismaAssetRepo = new PrismaAssetRepository_1.PrismaAssetRepository();
const listAssetCase = new ListAssetUseCase_1.ListAssetUseCase(prismaAssetRepo);
exports.listAssetCase = listAssetCase;
const listAssetController = new ListAssetController_1.ListAssetController(listAssetCase);
exports.listAssetController = listAssetController;
