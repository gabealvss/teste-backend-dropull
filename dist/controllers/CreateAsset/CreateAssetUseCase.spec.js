"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const PinataIPFSProvider_1 = require("../../providers/implementation/PinataIPFSProvider");
const InMemoryAssetRepository_1 = require("../../repositories/implementation/InMemoryAssetRepository");
const CreateAssetUseCase_1 = require("./CreateAssetUseCase");
let inMemoryAssetRepo;
let pinataIPFSProvider;
let createAssetCase;
let testImage;
describe("asset creation use case", () => {
    beforeEach(() => {
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
