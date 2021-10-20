import { PrismaClient } from ".prisma/client";
import { NFT } from "../../entities/NFT";
import { IAssetRepository } from "../IAssetRepository";
import { INFTRepository } from "../INFTRepository";
import { PrismaAssetRepository } from "./PrismaAssetRepository";

class PrismaNFTRepository implements INFTRepository {
  private assetRepo: IAssetRepository;
  private prisma: PrismaClient;

  constructor() {
    this.assetRepo = new PrismaAssetRepository();
    this.prisma = new PrismaClient();
  }

  async list(): Promise<NFT[]> {
    const query = await this.prisma.nFT.findMany().finally();
    const nfts: NFT[] = [];

    query.forEach((element) => {
      nfts.push({
        id: element.id,
        assetId: element.assetId,
      });
    });

    return nfts;
  }

  async exists(id: string): Promise<boolean> {
    const query = await this.prisma.nFT
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

  async save(nft: NFT): Promise<NFT> {
    if ((await this.assetRepo.exists(nft.assetId)) === false) {
      throw new Error("Invalid Asset ID");
    }

    await this.prisma.nFT.create({
      data: {
        id: nft.id,
        assetId: nft.assetId,
      },
    });

    return nft;
  }
}

export { PrismaNFTRepository };
