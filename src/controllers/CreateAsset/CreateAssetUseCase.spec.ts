import { IIPFSProvider } from "../../providers/IIPFSProvider";
import { PinataIPFSProvider } from "../../providers/implementation/PinataIPFSProvider";
import { IAssetRepository } from "../../repositories/IAssetRepository";
import { InMemoryAssetRepository } from "../../repositories/implementation/InMemoryAssetRepository";
import { CreateAssetUseCase } from "./CreateAssetUseCase";

let inMemoryAssetRepo: IAssetRepository
let pinataIPFSProvider: IIPFSProvider
let createAssetCase: CreateAssetUseCase
let testImage: Express.Multer.File

describe('asset creation use case', () => {
  beforeEach(() => {
    inMemoryAssetRepo = new InMemoryAssetRepository()
    pinataIPFSProvider = new PinataIPFSProvider()
    createAssetCase = new CreateAssetUseCase(inMemoryAssetRepo, pinataIPFSProvider)
    testImage = {}
  })

  it('should create a new asset', async () => {
    const response = await createAssetCase.exec({
      name: 'test',
      image: testImage,
      ipfs_token: ''
    })

    expect(inMemoryAssetRepo.exists(response.id)).toBeTruthy()
  })
})