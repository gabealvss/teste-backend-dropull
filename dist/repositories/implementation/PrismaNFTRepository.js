"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNFTRepository = void 0;
const client_1 = require(".prisma/client");
const PrismaAssetRepository_1 = require("./PrismaAssetRepository");
class PrismaNFTRepository {
    constructor() {
        this.assetRepo = new PrismaAssetRepository_1.PrismaAssetRepository();
        this.prisma = new client_1.PrismaClient();
    }
    async list() {
        const query = await this.prisma.nFT.findMany().finally();
        const nfts = [];
        query.forEach((element) => {
            nfts.push({
                id: element.id,
                assetId: element.assetId,
            });
        });
        return nfts;
    }
    async exists(id) {
        const query = await this.prisma.nFT
            .findUnique({
            where: {
                id: id,
            },
        })
            .finally();
        if (query === null) {
            return false;
        }
        else {
            return true;
        }
    }
    async save(nft) {
        if ((await this.assetRepo.exists(nft.assetId)) === false) {
            throw new Error("Invalid Asset ID");
        }
        await this.prisma.nFT.create({
            data: {
                id: nft.id,
                assetId: nft.assetId,
            },
        });
        return nft;
    }
}
exports.PrismaNFTRepository = PrismaNFTRepository;
