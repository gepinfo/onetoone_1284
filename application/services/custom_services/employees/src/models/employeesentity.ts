
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const employeesentitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   designation: String,
   employeeid: Number,
   carid: { type: Schema.Types.Number, ref: 'carsentity' }
})

const employeesentityModel = mongoose.model('employeesentity', employeesentitySchema, 'employeesentity');
export default employeesentityModel;
