"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aggregateController = require('../controllers/aggregate.controller');
module.exports = (app) => {
    /*
        ticker - Name of Stock (AAPL)
        duration - minute, hour, day, week, month, quarter, year
        from - Date (YYYY-MM-DD)
        to - Date (YYYY-MM-DD)
        limit - Max num of data points
    */
    app.get('/aggregate/:ticker/:duration/:from/:to/:limit', aggregateController.getOne);
};
