import {Document, Model, model, Schema} from 'mongoose';
import ICounter from "../interfaces/ICounter";


const CounterSchema: Schema = new Schema({
    value: {type: Number, required: true},
});

export const Counter: Model<ICounter> = model('Counter', CounterSchema);
