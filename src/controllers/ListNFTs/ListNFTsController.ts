import { Request, Response } from "express";
import { ListNFTsUseCase } from "./ListNFTsUseCase";

class ListNFTsController {
  constructor(private listNftsUseCase: ListNFTsUseCase) {}

  async exec(request: Request, response: Response): Promise<Response> {
    try {
      const nfts = await this.listNftsUseCase.exec();

      return response.status(200).json({ nfts: nfts });
    } catch (e) {
      return response.status(500).json({
        code: 500,
        message: "Unexpected internal server error.",
        details: e.message,
      });
    }
  }
}

export { ListNFTsController };
