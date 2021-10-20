import { Router } from "express";
import { createAssetController } from "../../../controllers/CreateAsset";
import { listAssetController } from "../../../controllers/ListAssets";
import uploads from "../middlewares/upload";

const AssetRouter = Router();

AssetRouter.post("/", uploads.single("image"), (req, res) => {
  return createAssetController.exec(req, res);
});

AssetRouter.get("/", (req, res) => {
  return listAssetController.exec(req, res);
});

export { AssetRouter };
