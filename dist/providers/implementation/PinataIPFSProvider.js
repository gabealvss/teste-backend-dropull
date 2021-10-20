"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinataIPFSProvider = void 0;
const sdk_1 = __importDefault(require("@pinata/sdk"));
const fs = __importStar(require("fs"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class PinataIPFSProvider {
    constructor() {
        this.pinataSDK = (0, sdk_1.default)(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);
    }
    async generateFromFile(name, file) {
        try {
            let response;
            const readableStreamForFile = fs.createReadStream(file.destination + file.filename);
            const options = {
                pinataMetadata: {
                    name: name,
                },
                pinataOptions: {
                    cidVersion: 0,
                },
            };
            await this.pinataSDK
                .pinFileToIPFS(readableStreamForFile, options)
                .then((res) => {
                response = res;
            });
            return response;
        }
        catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
}
exports.PinataIPFSProvider = PinataIPFSProvider;
