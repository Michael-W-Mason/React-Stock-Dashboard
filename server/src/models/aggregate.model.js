"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aggregate = void 0;
class Aggregate {
    constructor(res) {
        this.adjusted = res.adjusted;
        this.queryCount = res.queryCount;
        this.request_id = res.request_id;
        this.resultsCount = res.resultsCount;
        this.status = res.status;
        this.ticker = res.ticker;
        this.results = res.results;
    }
}
exports.Aggregate = Aggregate;
