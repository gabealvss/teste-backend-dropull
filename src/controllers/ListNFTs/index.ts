import { PrismaNFTRepository } from "../../repositories/implementation/PrismaNFTRepository";
import { ListNFTsController } from "./ListNFTsController";
import { ListNFTsUseCase } from "./ListNFTsUseCase";

const prismaNftRepo = new PrismaNFTRepository();

const listNFTsCase = new ListNFTsUseCase(prismaNftRepo);
const listNFTsController = new ListNFTsController(listNFTsCase);

export { listNFTsCase, listNFTsController };
