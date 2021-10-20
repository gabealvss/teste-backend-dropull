"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryAssetRepository = void 0;
class InMemoryAssetRepository {
    constructor() {
        this.assets = [];
    }
    async list() {
        return this.assets;
    }
    async exists(id) {
        return this.assets.some((asset) => asset.id === id);
    }
    async ipfsExists(ipfs_token) {
        return this.assets.some((asset) => asset.ipfs_token === ipfs_token);
    }
    async save(asset) {
        this.assets.push(asset);
        return asset;
    }
}
exports.InMemoryAssetRepository = InMemoryAssetRepository;
