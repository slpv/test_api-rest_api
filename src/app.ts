import express from 'express';
import counterRoutes from './routes/counter';
import {url, options} from './db';
import {connect} from "mongoose";

const port = process.env.PORT || 8080;

export const app1 = express();

// [all], '/counter'
app1.use(counterRoutes);
console.log(url);
app1.listen(port, () => {
    connect(url, options)
        .then(() => {
            console.log('DB is connected');
        })
        .catch((err) => {
            console.error(err);
        });
});
