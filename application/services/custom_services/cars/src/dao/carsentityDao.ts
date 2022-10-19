import * as mongoose from 'mongoose';
import carsentityModel from '../models/carsentity';
import { CustomLogger } from '../config/Logger'


export class carsentityDao {
    private carsentity = carsentityModel;
    constructor() { }
    
    public async GpCreate(carsentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into carsentityDao.ts: GpCreate');

    let temp = new carsentityModel(carsentityData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from carsentityDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}