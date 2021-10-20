"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssetController = void 0;
const RequestValidatorProvider_1 = require("../../providers/implementation/RequestValidatorProvider");
class CreateAssetController {
    constructor(createAssetUseCase) {
        this.createAssetUseCase = createAssetUseCase;
        this.validator = new RequestValidatorProvider_1.RequestValidatorProvider();
    }
    async exec(request, response) {
        const { name, description } = request.body;
        const image = request.file;
        if (!this.validator.validateParams({ name, description })) {
            return response.status(400).json({
                code: 400,
                message: "Invalid params.",
            });
        }
        try {
            const asset = await this.createAssetUseCase.exec({
                name: name,
                description: description,
                image: image,
                ipfs_token: "",
            });
            return response.status(201).json({ asset: asset });
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
exports.CreateAssetController = CreateAssetController;
