import { NFT } from "../../entities/NFT";
import { INFTRepository } from "../../repositories/INFTRepository";

class ListNFTsUseCase {
  constructor(private nftsRepo: INFTRepository) {}

  async exec(): Promise<NFT[]> {
    return await this.nftsRepo.list();
  }
}

export { ListNFTsUseCase };
