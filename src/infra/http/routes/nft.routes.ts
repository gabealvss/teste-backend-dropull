import { Router } from "express";
import { createNftController } from "../../../controllers/CreateNFT";
import { listNFTsController } from "../../../controllers/ListNFTs";

const NFTRouter = Router();

NFTRouter.post("/", (req, res) => {
  return createNftController.exec(req, res);
});

NFTRouter.get("/", (req, res) => {
  return listNFTsController.exec(req, res);
});

export { NFTRouter };
