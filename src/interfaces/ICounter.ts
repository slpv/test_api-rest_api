import {Document} from "mongoose";

export default interface ICounter extends Document {
    value: number;
}
