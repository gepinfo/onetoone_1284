import { Request, Response } from 'express';
import { employeesentityService } from '../service/employeesentityService';
import { CustomLogger } from '../config/Logger'
let employeesentity = new employeesentityService();

export class employeesentityController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
employeesentity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeesentityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeesentityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
employeesentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeesentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeesentityController.ts: GpCreate');
    })}
public GpSearchRelationship(req: Request, res: Response) {
employeesentity.GpSearchRelationship(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeesentityController.ts: GpSearchRelationship');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeesentityController.ts: GpSearchRelationship');
    })}


}