"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("./routes/route"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const port = process.env.PORT;
app.get('/', (req, res) => {
    return res.json({
        msg: "hello world"
    });
});
app.use('/routePath', route_1.default);
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
