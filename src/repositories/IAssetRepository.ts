import { Asset } from '../entities/Asset'

export interface IAssetRepository {
  list(): Promise<Asset[]>
  exists(id: string): Promise<boolean>
  save(asset: Asset): Promise<Asset>
}