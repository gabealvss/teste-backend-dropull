import { Request, Response } from "express";
import { CreateAssetUseCase } from "./CreateAssetUseCase";

class CreateAssetController {
  constructor(
    private createAssetUseCase: CreateAssetUseCase
  ) {}

  async exec(request: Request, response: Response): Promise<Response> {
    const { name } = request.body
    const image = request.file

    try {
      const asset = await this.createAssetUseCase.exec({
        name: name,
        image: image,
        ipfs_token: ""
      })

      return response.status(201).json({asset: asset})
    } catch(e) {
      return response.status(500).json({
        code: 500,
        message: 'Unexpected internal server error.'
      })
    }
  }
}

export { CreateAssetController }