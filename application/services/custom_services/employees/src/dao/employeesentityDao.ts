import * as mongoose from 'mongoose';
import employeesentityModel from '../models/employeesentity';
import { CustomLogger } from '../config/Logger'


export class employeesentityDao {
    private employeesentity = employeesentityModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeesentityDao.ts: GpGetAllValues');

    

    
    
    
    this.employeesentity.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeesentityDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(employeesentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeesentityDao.ts: GpCreate');

    let temp = new employeesentityModel(employeesentityData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeesentityDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchRelationship(employeesentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeesentityDao.ts: GpSearchRelationship');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(employeesentityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.employeesentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeesentityDao.ts: GpSearchRelationship');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}