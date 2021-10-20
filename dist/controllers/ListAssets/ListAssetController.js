"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAssetController = void 0;
class ListAssetController {
    constructor(listAssetUseCase) {
        this.listAssetUseCase = listAssetUseCase;
    }
    async exec(request, response) {
        try {
            const assets = await this.listAssetUseCase.exec();
            return response.status(200).json({ assets: assets });
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
exports.ListAssetController = ListAssetController;
