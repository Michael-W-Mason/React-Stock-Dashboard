"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Importing .env for entire server
dotenv_1.default.config();
const port = process.env.PORT;
exports.key = process.env.API_KEY;
// Express Config
const app = (0, express_1.default)();
// Routes
require('./src/routes/aggregate.routes')(app);
// Start Server
app.listen(port, () => {
    console.log(`[server]: Server Is Running on http://localhost:${port}`);
});
