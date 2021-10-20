import { Readable } from "stream";
import { IIPFSProvider } from "../IIPFSProvider";
import { PinataIPFSProvider } from "./PinataIPFSProvider";

let pinataIPFSProvider: IIPFSProvider;
let testImage: Express.Multer.File;

describe("Pinata IPFS Provider tests", () => {
  beforeEach(() => {
    pinataIPFSProvider = new PinataIPFSProvider();
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

  it("should upload and create a new IPFS Token on Pinata", async () => {
    const response = await pinataIPFSProvider.generateFromFile(
      "test",
      testImage
    );

    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty("IpfsHash");
  });
});
