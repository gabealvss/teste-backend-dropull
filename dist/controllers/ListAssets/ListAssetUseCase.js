"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAssetUseCase = void 0;
class ListAssetUseCase {
    constructor(assetRepo) {
        this.assetRepo = assetRepo;
    }
    async exec() {
        return await this.assetRepo.list();
    }
}
exports.ListAssetUseCase = ListAssetUseCase;
