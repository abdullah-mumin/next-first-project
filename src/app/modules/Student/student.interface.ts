export interface UserName {
  first_name: string;
  middle_name: string;
  last_name: string;
}

export interface Guardian {
  father_name: string;
  father_occupation: string;
  father_contact: string;
  mother_name: string;
  mother_occupation: string;
  mother_contact: string;
}

export interface LocalGuardian {
  name: string;
  occupation?: string;
  contact: string;
  address: string;
}

export interface Student {
  id: string;
  roll: number;
  name: UserName;
  email: string;
  gender: 'male' | 'female';
  date_of_birth: string;
  contact: string;
  blood_group: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  present_address: string;
  permanent_address: string;
  guardian: Guardian;
  local_guardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'inactive';
}
