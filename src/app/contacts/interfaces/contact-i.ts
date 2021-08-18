import { StateContact } from '../enums/state-contact';

export interface ContactI {
  name: string;
  email: string;
  phone: string;
  status: StateContact;
  _id: string;
  updatedAt?: string;
}
