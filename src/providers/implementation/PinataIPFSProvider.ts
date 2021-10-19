import pinataClient, { PinataClient, PinataPinOptions } from "@pinata/sdk"
import { IPFSPin } from "../../entities/IPFSPin"
import { IIPFSProvider } from "../IIPFSProvider"
import * as fs from "fs"

class PinataIPFSProvider implements IIPFSProvider {

  private pinataSDK: PinataClient

  constructor() {
    this.pinataSDK = pinataClient(
      process.env.PINATA_API_KEY, 
      process.env.PINATA_API_SECRET
    )
  }

  async generateFromFile(name: string, file: Express.Multer.File): Promise<IPFSPin> {
    try {
      let response: IPFSPin

      const readableStreamForFile = fs.createReadStream(file.destination + file.filename);
      const options: PinataPinOptions = {
        pinataMetadata: {
          name: name
        },
        pinataOptions: {
          cidVersion: 0
        }
      };


      await this.pinataSDK.pinFileToIPFS(readableStreamForFile, options)
      .then((res) => {
        response = res
      })

      return response
    } catch(e) {
      console.log(e)
      throw new Error(e)
    }
  }

}

export { PinataIPFSProvider }