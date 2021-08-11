import { StateContact } from '../enums/state-contact';
import { ContactI } from '../interfaces/contact-i';

export class Contact implements ContactI {
  name = 'name';
  email = 'exemple@exemple.com';
  phone!: number;
  state = StateContact.ACTIVE;
  id!: number;
  constructor(obj?: Partial<Contact>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
