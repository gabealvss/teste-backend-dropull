import { v4 as uuid } from "uuid";

class NFT {
  public readonly id: string;

  public assetId: string;

  constructor(properties: Omit<NFT, "id">, id?: string) {
    Object.assign(this, properties);

    if (!id) {
      this.id = uuid(); // Lidamos com a geração de ID aqui, independente do banco de dados ou ORM sempre vai funcionar
    }
  }
}

export { NFT };
