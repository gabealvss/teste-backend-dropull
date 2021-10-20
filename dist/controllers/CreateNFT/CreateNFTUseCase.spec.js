"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const PinataIPFSProvider_1 = require("../../providers/implementation/PinataIPFSProvider");
const InMemoryAssetRepository_1 = require("../../repositories/implementation/InMemoryAssetRepository");
const InMemoryNFTRepository_1 = require("../../repositories/implementation/InMemoryNFTRepository");
const CreateAssetUseCase_1 = require("../CreateAsset/CreateAssetUseCase");
const CreateNFTUseCase_1 = require("./CreateNFTUseCase");
let inMemoryNftRepo;
let createNftCase;
let inMemoryAssetRepo;
let createAssetCase;
let pinataIPFSProvider;
let testImage;
describe("nft creating use case", () => {
    beforeEach(() => {
        inMemoryNftRepo = new InMemoryNFTRepository_1.InMemoryNFTRepository();
        createNftCase = new CreateNFTUseCase_1.CreateNFTUseCase(inMemoryNftRepo);
        inMemoryAssetRepo = new InMemoryAssetRepository_1.InMemoryAssetRepository();
        pinataIPFSProvider = new PinataIPFSProvider_1.PinataIPFSProvider();
        createAssetCase = new CreateAssetUseCase_1.CreateAssetUseCase(inMemoryAssetRepo, pinataIPFSProvider);
        testImage = {
            fieldname: "",
            originalname: "",
            encoding: "",
            mimetype: "",
            size: 1000,
            stream: new stream_1.Readable(),
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
