interface ResultsInterface {
    // Close Price
    "c": number;
    // Highest Price
    "h": number;
    // Lowest Price
    "l": number;
    // Number of transactions in window
    "n": number;
    // Open Price
    "o": number;
    // Unix msec timestamp
    "t": number;
    // Number of trading volume
    "v": number;
    // Volume weighted average price
    "vw": number;
}


export class Aggregate {
    // If Response is adjusted for splits
    adjusted: Boolean;
    // Number of aggregates (min / day) used for response
    queryCount: number;
    // ID of request in server
    request_id: string;
    // Total length of results
    resultsCount: number;
    // Status of result
    status: string;
    // Name of the stock
    ticker: string; 
    // Array of data from the query
    results: ResultsInterface[];

    constructor(res: any) {
        this.adjusted = res.adjusted;
        this.queryCount = res.queryCount;
        this.request_id = res.request_id;
        this.resultsCount = res.resultsCount;
        this.status = res.status;
        this.ticker = res.ticker;
        this.results = res.results;
    }
}