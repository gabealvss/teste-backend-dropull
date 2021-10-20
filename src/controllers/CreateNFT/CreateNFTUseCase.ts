import { NFT } from "../../entities/NFT";
import { INFTRepository } from "../../repositories/INFTRepository";
import { ICreateNFTDTO } from "./ICreateNFTDTO";

class CreateNFTUseCase {
  constructor(private nftRepo: INFTRepository) {}

  async exec(payload: ICreateNFTDTO) {
    const nft = new NFT(payload);

    return await this.nftRepo.save(nft);
  }
}

export { CreateNFTUseCase };
