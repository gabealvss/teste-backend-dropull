import { Readable } from "stream";
import { IIPFSProvider } from "../../providers/IIPFSProvider";
import { PinataIPFSProvider } from "../../providers/implementation/PinataIPFSProvider";
import { IAssetRepository } from "../../repositories/IAssetRepository";
import { InMemoryAssetRepository } from "../../repositories/implementation/InMemoryAssetRepository";
import { InMemoryNFTRepository } from "../../repositories/implementation/InMemoryNFTRepository";
import { INFTRepository } from "../../repositories/INFTRepository";
import { CreateAssetUseCase } from "../CreateAsset/CreateAssetUseCase";
import { CreateNFTUseCase } from "./CreateNFTUseCase";

let inMemoryNftRepo: INFTRepository;
let createNftCase: CreateNFTUseCase;

let inMemoryAssetRepo: IAssetRepository;
let createAssetCase: CreateAssetUseCase;
let pinataIPFSProvider: IIPFSProvider;
let testImage: Express.Multer.File;

describe("nft creating use case", () => {
  beforeEach(() => {
    inMemoryNftRepo = new InMemoryNFTRepository();
    createNftCase = new CreateNFTUseCase(inMemoryNftRepo);

    inMemoryAssetRepo = new InMemoryAssetRepository();
    pinataIPFSProvider = new PinataIPFSProvider();
    createAssetCase = new CreateAssetUseCase(
      inMemoryAssetRepo,
      pinataIPFSProvider
    );
    testImage = {
      fieldname: "",
      originalname: "",
      encoding: "",
      mimetype: "",
      size: 1000,
      stream: new Readable(),
      destination: "./src/tests/",
      filename: "testImg.jpg",
      path: "",
      buffer: Buffer.from(""),
    };
  });

  it("should create a new asset and a NFT containing the asset", async () => {
    const asset = await createAssetCase.exec({
      name: "test",
      description: "test description",
      image: testImage,
      ipfs_token: "",
    });

    const response = await createNftCase.exec({
      assetId: asset.id,
    });

    expect(inMemoryAssetRepo.exists(asset.id)).toBeTruthy();
    expect(inMemoryNftRepo.exists(response.id)).toBeTruthy();
  });
});
