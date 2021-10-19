import { PinataIPFSProvider } from "../../providers/implementation/PinataIPFSProvider";
import { InMemoryAssetRepository } from "../../repositories/implementation/InMemoryAssetRepository";
import { PrismaAssetRepository } from "../../repositories/implementation/PrismaAssetRepository";
import { CreateAssetController } from "./CreateAssetController";
import { CreateAssetUseCase } from "./CreateAssetUseCase";

const prismaAssetRepo = new InMemoryAssetRepository()
const pinataIPFSProvider = new PinataIPFSProvider()

const createAssetCase = new CreateAssetUseCase(prismaAssetRepo, pinataIPFSProvider)

const createAssetController = new CreateAssetController(createAssetCase)

export { createAssetCase, createAssetController }
