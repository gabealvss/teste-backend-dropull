"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssetUseCase = void 0;
const Asset_1 = require("../../entities/Asset");
class CreateAssetUseCase {
    constructor(assetRepo, ipfsProvider) {
        this.assetRepo = assetRepo;
        this.ipfsProvider = ipfsProvider;
    }
    async exec(payload) {
        const ipfs_token = (await this.ipfsProvider.generateFromFile(payload.name, payload.image)).IpfsHash;
        payload.ipfs_token = ipfs_token;
        const asset = new Asset_1.Asset(payload);
        return await this.assetRepo.save(asset);
    }
}
exports.CreateAssetUseCase = CreateAssetUseCase;
