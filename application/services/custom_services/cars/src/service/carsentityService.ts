import { Request, Response } from 'express';
import {carsentityDao} from '../dao/carsentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let carsentity = new carsentityDao();

export class carsentityService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into carsentityService.ts: GpCreate')
     let  carsentityData = req.body;
     carsentity.GpCreate(carsentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from carsentityService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}