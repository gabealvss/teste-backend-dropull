import { Asset } from "../../entities/Asset"
import { IAssetRepository } from "../IAssetRepository"
import { PrismaClient } from "@prisma/client"

class PrismaAssetRepository implements IAssetRepository {
  constructor(private prisma: PrismaClient) {
    this.prisma = new PrismaClient()
  }

  async list(): Promise<Asset[]> {
    return []
  }

  async exists(id: string): Promise<boolean> {
    return true
  }

  async save(asset: Asset): Promise<Asset> {
    await this.prisma.asset.create({
      data: {
        id: asset.id,
        name: asset.name,
        image: asset.image.path,
        ipfs_token: asset.ipfs_token
      }
    })

    return asset
  }
}

export { PrismaAssetRepository }