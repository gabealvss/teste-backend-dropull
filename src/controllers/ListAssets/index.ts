import { PrismaAssetRepository } from "../../repositories/implementation/PrismaAssetRepository";
import { ListAssetController } from "./ListAssetController";
import { ListAssetUseCase } from "./ListAssetUseCase";

const prismaAssetRepo = new PrismaAssetRepository();

const listAssetCase = new ListAssetUseCase(prismaAssetRepo);
const listAssetController = new ListAssetController(listAssetCase);

export { listAssetCase, listAssetController };
