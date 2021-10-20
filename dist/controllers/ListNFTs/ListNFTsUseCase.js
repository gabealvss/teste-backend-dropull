"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNFTsUseCase = void 0;
class ListNFTsUseCase {
    constructor(nftsRepo) {
        this.nftsRepo = nftsRepo;
    }
    async exec() {
        return await this.nftsRepo.list();
    }
}
exports.ListNFTsUseCase = ListNFTsUseCase;
