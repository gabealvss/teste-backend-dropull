"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNFTUseCase = void 0;
const NFT_1 = require("../../entities/NFT");
class CreateNFTUseCase {
    constructor(nftRepo) {
        this.nftRepo = nftRepo;
    }
    async exec(payload) {
        const nft = new NFT_1.NFT(payload);
        return await this.nftRepo.save(nft);
    }
}
exports.CreateNFTUseCase = CreateNFTUseCase;
