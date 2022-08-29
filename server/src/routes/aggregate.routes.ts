import express, { Express } from 'express';
const aggregateController = require('../controllers/aggregate.controller'); 

module.exports = (app : Express) => {
    /*
        ticker - Name of Stock (AAPL)
        duration - minute, hour, day, week, month, quarter, year
        from - Date (YYYY-MM-DD)
        to - Date (YYYY-MM-DD)
        limit - Max num of data points
    */
    app.get('/aggregate/:ticker/:duration/:from/:to/:limit', aggregateController.getOne);
};