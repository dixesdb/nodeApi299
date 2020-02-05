"use strict";
require('../config/config');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express_1.default();
    }
    start(callback) {
        this.app.listen(this.port);
        
    }
}
exports.default = Server;
