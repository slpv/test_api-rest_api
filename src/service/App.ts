import IResponse from "../interfaces/IResponse";
import express from 'express';
import mongoose from 'mongoose';
import IConfig from "../interfaces/IConfig";

export default class App {
    name: string;
    express: express.Express;
    config: IConfig;
    mongoURI: string;

    constructor(name: string, app: express.Express, config: IConfig) {
        this.name = name;
        this.express = app;
        this.config = config;
        this.mongoURI = config.MONGO.URI.replace("<user>", config.MONGO.USER).replace("<password>", config.MONGO.PASSWORD).replace("<appName>", this.name);

    }


    start(): Promise<IResponse> {
        return new Promise((resolve) => {
            try {
                mongoose.connect(this.mongoURI, {
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                    useFindAndModify: false
                })
                    .then(() => {
                        this.express.listen(this.config.PORT, () => {
                            resolve({status: true, message: `${this.name} has been started`});
                        })
                    })
                    .catch((error) => {
                        throw error;
                    })
            } catch (e) {
                resolve({status: false, message: 'Error'});
            }
        })
    }
}
