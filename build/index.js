"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
require("dotenv").config();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "/dist")));
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
