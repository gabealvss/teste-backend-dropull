import { NFT } from "../../entities/NFT";
import { INFTRepository } from "../INFTRepository";

class InMemoryNFTRepository implements INFTRepository {
  private nfts: NFT[] = [];

  async list(): Promise<NFT[]> {
    return this.nfts;
  }

  async exists(id: string): Promise<boolean> {
    return this.nfts.some((nft) => nft.id === id);
  }

  async save(nft: NFT): Promise<NFT> {
    this.nfts.push(nft);

    return nft;
  }
}

export { InMemoryNFTRepository };
