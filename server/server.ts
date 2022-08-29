import express, { Express } from 'express';
import dotenv from 'dotenv';

// Importing .env for entire server
dotenv.config();
const port = process.env.PORT;


export const key = process.env.API_KEY;

// Express Config
const app: Express = express();


// Routes
require('./src/routes/aggregate.routes')(app);

// Start Server
app.listen(port, () => {
    console.log(`[server]: Server Is Running on http://localhost:${port}`);
});