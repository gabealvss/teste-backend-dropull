import { Request, Response } from "express";
import { RequestValidatorProvider } from "../../providers/implementation/RequestValidatorProvider";
import { IValidatorProvider } from "../../providers/IValidatorProvider";
import { CreateAssetUseCase } from "./CreateAssetUseCase";

class CreateAssetController {
  private validator: IValidatorProvider;

  constructor(private createAssetUseCase: CreateAssetUseCase) {
    this.validator = new RequestValidatorProvider();
  }

  async exec(request: Request, response: Response): Promise<Response> {
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
    } catch (e) {
      return response.status(500).json({
        code: 500,
        message: "Unexpected internal server error.",
        details: e.message,
      });
    }
  }
}

export { CreateAssetController };
