import { PrismaNFTRepository } from "../../repositories/implementation/PrismaNFTRepository";
import { CreateNFTController } from "./CreateNFTController";
import { CreateNFTUseCase } from "./CreateNFTUseCase";

const prismaNftRepo = new PrismaNFTRepository();

const createNftCase = new CreateNFTUseCase(prismaNftRepo);
const createNftController = new CreateNFTController(createNftCase);

export { createNftCase, createNftController };
