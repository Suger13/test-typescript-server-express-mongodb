"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.client = void 0;
//MongoDB
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//insert URI in .env first
const client = new mongodb_1.MongoClient(`${process.env.URI}`);
exports.client = client;
//select Database
const db = client.db('test');
exports.db = db;
//PostgreSQL
