import { PinataIPFSProvider } from "../../providers/implementation/PinataIPFSProvider";
import { PrismaAssetRepository } from "../../repositories/implementation/PrismaAssetRepository";
import { CreateAssetController } from "./CreateAssetController";
import { CreateAssetUseCase } from "./CreateAssetUseCase";

const prismaAssetRepo = new PrismaAssetRepository();
const pinataIPFSProvider = new PinataIPFSProvider();

const createAssetCase = new CreateAssetUseCase(
  prismaAssetRepo,
  pinataIPFSProvider
);
const createAssetController = new CreateAssetController(createAssetCase);

export { createAssetCase, createAssetController };
