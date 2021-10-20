import { Asset } from "../../entities/Asset";
import { IAssetRepository } from "../IAssetRepository";

class InMemoryAssetRepository implements IAssetRepository {
  private assets: Asset[] = [];

  async list(): Promise<Asset[]> {
    return this.assets;
  }

  async exists(id: string): Promise<boolean> {
    return this.assets.some((asset) => asset.id === id);
  }

  async ipfsExists(ipfs_token: string): Promise<boolean> {
    return this.assets.some((asset) => asset.ipfs_token === ipfs_token);
  }

  async save(asset: Asset): Promise<Asset> {
    this.assets.push(asset);

    return asset;
  }
}

export { InMemoryAssetRepository };
