import { Request, Response, NextFunction } from "express";
import { carsentityController } from '../controller/carsentityController';


export class Routes {
    private carsentity: carsentityController = new carsentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/carsentity').post(this.carsentity.GpCreate);
     }

}