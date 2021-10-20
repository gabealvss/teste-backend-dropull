import { Request, Response } from "express";
import { NFT } from "../../entities/NFT";
import { RequestValidatorProvider } from "../../providers/implementation/RequestValidatorProvider";
import { IValidatorProvider } from "../../providers/IValidatorProvider";
import { CreateNFTUseCase } from "./CreateNFTUseCase";

class CreateNFTController {
  private validator: IValidatorProvider;

  constructor(private createNftUseCase: CreateNFTUseCase) {
    this.validator = new RequestValidatorProvider();
  }

  async exec(request: Request, response: Response): Promise<Response> {
    const { quantity, asset } = request.body;

    if (!this.validator.validateParams({ quantity, asset })) {
      return response.status(400).json({
        code: 400,
        message: "Invalid params.",
      });
    }

    try {
      const nfts: NFT[] = [];

      for (let i = 0; i < quantity; i++) {
        nfts.push(
          await this.createNftUseCase.exec({
            assetId: asset,
          })
        );
      }

      return response.status(201).json({ nfts: nfts });
    } catch (e) {
      return response.status(500).json({
        code: 500,
        message: "Unexpected internal server error.",
        details: e.message,
      });
    }
  }
}

export { CreateNFTController };
