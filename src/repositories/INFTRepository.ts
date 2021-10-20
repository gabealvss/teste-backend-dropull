import { NFT } from "../entities/NFT";

export interface INFTRepository {
  list(): Promise<NFT[]>;
  exists(id: string): Promise<boolean>;
  save(nft: NFT): Promise<NFT>;
}
