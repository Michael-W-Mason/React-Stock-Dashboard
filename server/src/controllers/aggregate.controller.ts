import axios from 'axios';
import { key } from '../../server';
import { Request, Response } from 'express';
import { Aggregate } from '../models/aggregate.model';

// Aggregate Model Import
const agg = require('../models/aggregate.model');


module.exports.getOne = (req : Request, res : Response) => {
    axios.get(`https://api.polygon.io/v2/aggs/ticker/${req.params.ticker}/range/1/${req.params.duration}/${req.params.from}/${req.params.to}?adjusted=true&sort=asc&limit=${req.params.limit}&apiKey=${key}`)
        .then(response => {
            let stock : Aggregate = new Aggregate(response);
            console.log(response);
            res.send(stock);
        })
        .catch((error : Error) => {
            console.log(error);
            res.send({error : 'There was an error with your request'})
        });
}

