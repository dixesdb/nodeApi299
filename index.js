"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
require('./config/config');
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const post_1 = __importDefault(require("./routes/post"));
const cors_1 = __importDefault(require("cors"));
const usuarioP_1 = __importDefault(require("./routes/usuarioP"));
const posttienda_1 = __importDefault(require("./routes/posttienda"));
const app = express();
// Body parser
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// FileUpload
app.use(express_fileupload_1.default({ useTempFiles: true }));
//configurar cors
app.use(cors_1.default({ origin: true, credentials: true }));
// Rutas de mi app
app.use('/user', usuario_1.default);
app.use('/userP', usuarioP_1.default);
app.use('/posts', post_1.default);
app.use('/postsT', posttienda_1.default);
// Conectar DB
mongoose_1.default.connect('mongodb+srv://admin:peluditos@cluster0-3o4h8.mongodb.net/PeluditosDB?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }, (err) => {
    if (err)
        throw err;
    console.log('Base de datos ONLINE');
});
// Levantar express
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo puerto ${process.env.PORT} `);
});
