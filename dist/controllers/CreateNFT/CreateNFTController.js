"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNFTController = void 0;
const RequestValidatorProvider_1 = require("../../providers/implementation/RequestValidatorProvider");
class CreateNFTController {
    constructor(createNftUseCase) {
        this.createNftUseCase = createNftUseCase;
        this.validator = new RequestValidatorProvider_1.RequestValidatorProvider();
    }
    async exec(request, response) {
        const { quantity, asset } = request.body;
        if (!this.validator.validateParams({ quantity, asset })) {
            return response.status(400).json({
                code: 400,
                message: "Invalid params.",
            });
        }
        try {
            const nfts = [];
            for (let i = 0; i < quantity; i++) {
                nfts.push(await this.createNftUseCase.exec({
                    assetId: asset,
                }));
            }
            return response.status(201).json({ nfts: nfts });
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
exports.CreateNFTController = CreateNFTController;
