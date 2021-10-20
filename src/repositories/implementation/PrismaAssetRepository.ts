import { Asset } from "../../entities/Asset";
import { IAssetRepository } from "../IAssetRepository";
import { PrismaClient } from "@prisma/client";

class PrismaAssetRepository implements IAssetRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async list(): Promise<Asset[]> {
    const query = await this.prisma.asset.findMany().finally();
    const assets: Asset[] = [];

    query.forEach((element) => {
      assets.push({
        id: element.id,
        name: element.name,
        description: element.description,
        ipfs_token: element.ipfs_token,
      });
    });

    return assets;
  }

  async exists(id: string): Promise<boolean> {
    const query = await this.prisma.asset
      .findUnique({
        where: {
          id: id,
        },
      })
      .finally();

    if (query === null) {
      return false;
    } else {
      return true;
    }
  }

  async ipfsExists(ipfs_token: string): Promise<boolean> {
    const query = await this.prisma.asset
      .findUnique({
        where: {
          ipfs_token: ipfs_token,
        },
      })
      .finally();

    if (query === null) {
      return false;
    } else {
      return true;
    }
  }

  async save(asset: Asset): Promise<Asset> {
    if ((await this.ipfsExists(asset.ipfs_token)) === true) {
      throw Error(
        "An asset with this IPFS Token already exists on the network."
      );
    }

    await this.prisma.asset.create({
      data: {
        id: asset.id,
        name: asset.name,
        description: asset.description,
        image: asset.image.path,
        ipfs_token: asset.ipfs_token,
      },
    });

    return asset;
  }
}

export { PrismaAssetRepository };
