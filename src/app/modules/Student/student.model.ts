import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const studentNameSchema = new Schema<UserName>({
  first_name: { type: String, required: true },
  middle_name: { type: String },
  last_name: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  father_name: { type: String, required: true },
  father_occupation: { type: String, required: true },
  father_contact: { type: String, required: true },
  mother_name: { type: String, required: true },
  mother_contact: { type: String, required: true },
  mother_occupation: { type: String, required: true },
});

const localGuardianschema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
});

const StudentSchema = new Schema<Student>({
  id: { type: String },
  roll: { type: Number, required: true },
  name: studentNameSchema,
  email: { type: String, required: true },
  gender: ['male', 'female'],
  date_of_birth: { type: String, required: true },
  contact: { type: String, require: true },
  blood_group: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  present_address: { type: String, required: true },
  permanent_address: { type: String, required: true },
  guardian: guardianSchema,
  local_guardian: localGuardianschema,
  profileImage: { type: String },
  isActive: ['active', 'inactive'],
});

export const StudentModel = model<Student>('Student', StudentSchema);
