"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const server_1 = require("../../server");
const aggregate_model_1 = require("../models/aggregate.model");
// Aggregate Model Import
const agg = require('../models/aggregate.model');
module.exports.getOne = (req, res) => {
    axios_1.default.get(`https://api.polygon.io/v2/aggs/ticker/${req.params.ticker}/range/1/${req.params.duration}/${req.params.from}/${req.params.to}?adjusted=true&sort=asc&limit=${req.params.limit}&apiKey=${server_1.key}`)
        .then(response => {
        let stock = new aggregate_model_1.Aggregate(response);
        console.log(response);
        res.send(stock);
    })
        .catch((error) => {
        console.log(error);
        res.send({ error: 'There was an error with your request' });
    });
};
