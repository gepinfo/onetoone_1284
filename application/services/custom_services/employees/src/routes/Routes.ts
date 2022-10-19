import { Request, Response, NextFunction } from "express";
import { employeesentityController } from '../controller/employeesentityController';


export class Routes {
    private employeesentity: employeesentityController = new employeesentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/employeesentity').get(this.employeesentity.GpGetAllValues);
app.route('/employeesentity').post(this.employeesentity.GpCreate);
app.route('/employeesentity/get/searchrelationship').get(this.employeesentity.GpSearchRelationship);
     }

}