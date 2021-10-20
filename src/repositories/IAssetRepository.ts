import { Asset } from "../entities/Asset";

export interface IAssetRepository {
  list(): Promise<Asset[]>;
  exists(id: string): Promise<boolean>;
  ipfsExists(ipfs_token: string): Promise<boolean>;
  save(asset: Asset): Promise<Asset>;
}
