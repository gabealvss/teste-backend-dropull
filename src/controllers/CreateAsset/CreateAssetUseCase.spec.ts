import { Readable } from "stream";
import { IIPFSProvider } from "../../providers/IIPFSProvider";
import { PinataIPFSProvider } from "../../providers/implementation/PinataIPFSProvider";
import { IAssetRepository } from "../../repositories/IAssetRepository";
import { InMemoryAssetRepository } from "../../repositories/implementation/InMemoryAssetRepository";
import { CreateAssetUseCase } from "./CreateAssetUseCase";

let inMemoryAssetRepo: IAssetRepository;
let pinataIPFSProvider: IIPFSProvider;
let createAssetCase: CreateAssetUseCase;
let testImage: Express.Multer.File;

describe("asset creation use case", () => {
  beforeEach(() => {
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

  it("should create a new asset", async () => {
    const response = await createAssetCase.exec({
      name: "test",
      description: "test description",
      image: testImage,
      ipfs_token: "",
    });

    expect(inMemoryAssetRepo.exists(response.id)).toBeTruthy();
  });

  it("should not be able to create two assets with the same IPFS Token", async () => {
    const response = await createAssetCase.exec({
      name: "test",
      description: "test description",
      image: testImage,
      ipfs_token: "",
    });

    expect(inMemoryAssetRepo.ipfsExists(response.id)).toBeTruthy();
  });
});
