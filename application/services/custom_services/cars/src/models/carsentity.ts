
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const carsentitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   carid: Number,
   model: String
})

const carsentityModel = mongoose.model('carsentity', carsentitySchema, 'carsentity');
export default carsentityModel;
