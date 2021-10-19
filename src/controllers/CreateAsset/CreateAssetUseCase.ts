import { Asset } from "../../entities/Asset";
import { IIPFSProvider } from "../../providers/IIPFSProvider";
import { IAssetRepository } from "../../repositories/IAssetRepository";
import { ICreateAssetDTO } from "./ICreateAssetDTO";

class CreateAssetUseCase {
  constructor(
    private assetRepo: IAssetRepository,
    private ipfsProvider: IIPFSProvider
  ) {}

  async exec(payload: ICreateAssetDTO) {
    const ipfs_token = (await this.ipfsProvider.generateFromFile(payload.name, payload.image)).IpfsHash
    payload.ipfs_token = ipfs_token

    const asset = new Asset(payload)

    return await this.assetRepo.save(asset)
  }
}

export { CreateAssetUseCase }