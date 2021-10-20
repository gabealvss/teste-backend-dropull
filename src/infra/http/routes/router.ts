import { Router } from "express";
import { AssetRouter } from "./asset.routes";
import { NFTRouter } from "./nft.routes";

const router = Router();

router.use("/asset", AssetRouter);
router.use("/nft", NFTRouter);

export { router };
