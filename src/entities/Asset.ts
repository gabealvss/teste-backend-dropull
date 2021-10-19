import { v4 as uuid } from 'uuid'

class Asset {
  public readonly id: string

  public name: string
  public image: Express.Multer.File
  public ipfs_token: string

  constructor(properties: Omit<Asset, 'id'>, id?: string) {
    Object.assign(this, properties)

    if(!id) {
      this.id = uuid(); // Lidamos com a geração de ID aqui, independente do banco de dados ou ORM sempre vai funcionar
    }
  }
}

export { Asset }