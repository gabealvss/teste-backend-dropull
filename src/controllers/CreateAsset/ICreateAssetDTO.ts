export interface ICreateAssetDTO {
  name: string;
  description: string;
  image: Express.Multer.File;
  ipfs_token: string;
}
