import { IPFSPin } from "../entities/IPFSPin";

export interface IIPFSProvider {
  generateFromFile(name: string, file: Express.Multer.File): Promise<IPFSPin>;
}
