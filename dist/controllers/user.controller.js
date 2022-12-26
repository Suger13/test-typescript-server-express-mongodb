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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const dbConfigurator_1 = require("../dbConfig/dbConfigurator");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userController = {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = Object.assign({}, req.body.email);
            const password = req.body.password;
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            dbConfigurator_1.db.collection('users').insertOne({
                email: email,
                password: hashedPassword
            });
            return res.status(201).json({
                msg: `user has been created!`
            });
        });
    }
};
exports.default = userController;