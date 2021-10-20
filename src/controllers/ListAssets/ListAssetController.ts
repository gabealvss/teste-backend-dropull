import { Request, Response } from "express";
import { ListAssetUseCase } from "./ListAssetUseCase";

class ListAssetController {
  constructor(private listAssetUseCase: ListAssetUseCase) {}

  async exec(request: Request, response: Response): Promise<Response> {
    try {
      const assets = await this.listAssetUseCase.exec();

      return response.status(200).json({ assets: assets });
    } catch (e) {
      return response.status(500).json({
        code: 500,
        message: "Unexpected internal server error.",
        details: e.message,
      });
    }
  }
}

export { ListAssetController };
