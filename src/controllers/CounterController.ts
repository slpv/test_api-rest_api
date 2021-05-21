import IResponse from "../interfaces/IResponse";
import {Counter} from "../models/Counter";

export default class CounterController {
    static increment(value = 1): Promise<IResponse> {
        return new Promise((resolve, reject) => {
            try {
                Counter.findOneAndUpdate({}, {$inc: {value: value}}, {new: true, upsert: true}, (err, doc) => {
                    if (err) {
                        console.error(err);
                        resolve({status: false, message: err});
                    }
                    resolve({status: true, message: "Success", data: doc.value});
                });
            } catch (e) {
                reject(e);
            }
        })
    }
}
