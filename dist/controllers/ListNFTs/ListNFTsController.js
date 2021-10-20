"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNFTsController = void 0;
class ListNFTsController {
    constructor(listNftsUseCase) {
        this.listNftsUseCase = listNftsUseCase;
    }
    async exec(request, response) {
        try {
            const nfts = await this.listNftsUseCase.exec();
            return response.status(200).json({ nfts: nfts });
        }
        catch (e) {
            return response.status(500).json({
                code: 500,
                message: "Unexpected internal server error.",
                details: e.message,
            });
        }
    }
}
exports.ListNFTsController = ListNFTsController;
