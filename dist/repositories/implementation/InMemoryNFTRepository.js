"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryNFTRepository = void 0;
class InMemoryNFTRepository {
    constructor() {
        this.nfts = [];
    }
    async list() {
        return this.nfts;
    }
    async exists(id) {
        return this.nfts.some((nft) => nft.id === id);
    }
    async save(nft) {
        this.nfts.push(nft);
        return nft;
    }
}
exports.InMemoryNFTRepository = InMemoryNFTRepository;
