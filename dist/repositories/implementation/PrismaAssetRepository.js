"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAssetRepository = void 0;
const client_1 = require("@prisma/client");
class PrismaAssetRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async list() {
        const query = await this.prisma.asset.findMany().finally();
        const assets = [];
        query.forEach((element) => {
            assets.push({
                id: element.id,
                name: element.name,
                description: element.description,
                ipfs_token: element.ipfs_token,
            });
        });
        return assets;
    }
    async exists(id) {
        const query = await this.prisma.asset
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
    async ipfsExists(ipfs_token) {
        const query = await this.prisma.asset
            .findUnique({
            where: {
                ipfs_token: ipfs_token,
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
    async save(asset) {
        if ((await this.ipfsExists(asset.ipfs_token)) === true) {
            throw Error("An asset with this IPFS Token already exists on the network.");
        }
        await this.prisma.asset.create({
            data: {
                id: asset.id,
                name: asset.name,
                description: asset.description,
                image: asset.image.path,
                ipfs_token: asset.ipfs_token,
            },
        });
        return asset;
    }
}
exports.PrismaAssetRepository = PrismaAssetRepository;
