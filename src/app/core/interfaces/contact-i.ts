import { StateContact } from '../enums/state-contact';

export interface ContactI {
  name: string;
  email: string;
  phone: number;
  state: StateContact;
  id: number;
}
