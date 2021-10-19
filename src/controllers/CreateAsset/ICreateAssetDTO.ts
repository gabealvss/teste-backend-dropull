export interface ICreateAssetDTO {
  name: string
  image: Express.Multer.File
  ipfs_token: string
}