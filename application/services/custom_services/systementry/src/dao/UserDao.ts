import * as mongoose from 'mongoose';
import UserModel from '../models/User';
import { CustomLogger } from '../config/Logger'
import { SystemEntryService } from '../config/SystemEntryService';
import fetch from 'node-fetch';
const faker = require('faker');


export class UserDao {
    
    private User = UserModel;
    constructor() { }
    
    public async GpSEF(UserFeatureId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpSEF');

    

    
    
    
    this.sefServices.GpSEF(UserFeatureId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from UserDao.ts: GpSEF');

        callback(result);
}).catch((error)=>{
callback(error);
});}

    
    }