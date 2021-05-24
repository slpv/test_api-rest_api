import {Request, Response, Router} from 'express';
import IResponse from "../interfaces/IResponse";
import CounterController from "../controllers/CounterController";

const router = Router();

router.post('/count', async (req: Request, res: Response) => {
    CounterController.increment(1)
        .then((result) => {
            if (result.status) {
                const responseData: IResponse = {status: true, message: result.message, data: result.data};
                res.status(200).json(responseData);
            } else {
                const responseData: IResponse = {status: false, message: result.message};
                res.status(418).json(responseData);
            }
        })
        .catch((error) => {
            const responseData: IResponse = {status: false, message: error.message};
            res.status(500).json(responseData);

        })
});

export default router;
