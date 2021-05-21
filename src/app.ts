import express from 'express';
import IResponse from "./interfaces/IResponse";
import App from "./service/App";
import counterRoutes from './routes/counter';

const config = require('./../config/CONFIG.json');

export const app1: App = new App("Counter", express(), config);

// All, '/counter'
app1.express.use(counterRoutes);
app1.start()
    .then((result: IResponse) => {
        console.log(result.message);
    })
    .catch((error) => {
        console.error('UE', {error});
    });


export default app1;
