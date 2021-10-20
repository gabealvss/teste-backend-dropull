import { Asset } from "../../entities/Asset";
import { IAssetRepository } from "../../repositories/IAssetRepository";

class ListAssetUseCase {
  constructor(private assetRepo: IAssetRepository) {}

  async exec(): Promise<Asset[]> {
    return await this.assetRepo.list();
  }
}

export { ListAssetUseCase };
