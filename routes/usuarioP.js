"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_model_1 = require("../models/usuario.model");
const userPRoutes = express_1.Router();
userPRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pagina = Number(req.query.pagina) || 1;
    let skip = pagina - 1;
    skip = skip * 10;
    const users = yield usuario_model_1.Usuario.find()
        .sort({ _id: -1 })
        .skip(skip)
        .limit(10)
        .populate('usuario', '-password')
        .exec();
    res.json({
        ok: true,
        pagina,
        users
    });
    res.status(200).json({
        ok: true,
    });
}));
userPRoutes.get('/pas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pagina = Number(req.query.pagina) || 1;
    let skip = pagina - 1;
    skip = skip * 10;
    const body = req.body;
    const users = yield usuario_model_1.Usuario.find({ tipo: 'Paseador' })
        .sort({ _id: -1 })
        .skip(skip)
        .limit(10)
        .exec();
    res.json({
        ok: true,
        pagina,
        users
    });
    res.status(200).json({
        ok: true,
    });
}));
userPRoutes.get('/cli', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pagina = Number(req.query.pagina) || 1;
    let skip = pagina - 1;
    skip = skip * 10;
    const body = req.body;
    const users = yield usuario_model_1.Usuario.find({ tipo: 'Cliente' })
        .sort({ _id: -1 })
        .skip(skip)
        .limit(10)
        .exec();
    res.json({
        ok: true,
        pagina,
        users
    });
    res.status(200).json({
        ok: true,
    });
}));
//Realizar busqueda de usuarios
userPRoutes.get('/bus', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //let nombre = String(req.query.nombre) || 1;
    let nombre = String(req.query.nombre);
    const users = yield usuario_model_1.Usuario.find({ nombre: nombre = String(req.query.nombre) })
        .sort({ _id: -1 })
        .limit(10)
        .populate('usuario', '-password')
        .exec();
    res.json({
        ok: true,
        nombre,
        users
    });
}));
exports.default = userPRoutes;
