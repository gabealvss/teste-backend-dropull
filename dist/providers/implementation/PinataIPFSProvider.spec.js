"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const PinataIPFSProvider_1 = require("./PinataIPFSProvider");
let pinataIPFSProvider;
let testImage;
describe("Pinata IPFS Provider tests", () => {
    beforeEach(() => {
        pinataIPFSProvider = new PinataIPFSProvider_1.PinataIPFSProvider();
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
    it("should upload and create a new IPFS Token on Pinata", async () => {
        const response = await pinataIPFSProvider.generateFromFile("test", testImage);
        expect(response).toBeInstanceOf(Object);
        expect(response).toHaveProperty("IpfsHash");
    });
});
