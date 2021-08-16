import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateContact } from '../enums/state-contact';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {}

  // get all contacts
  public list() {
    return this.http.get<Contact[]>(`${this.urlApi}/contacts`);
  }
  // get a contact
  public get(id: string) {
    return this.http.get<Contact>(`${this.urlApi}/contacts/${id}`);
  }

  // change state

  public changeState(contact: Contact, status: StateContact): Observable<any> {
    const obj = new Contact({ ...contact });
    obj.status = status;
    return this.update(obj);
  }

  // edit item in collection
  public update(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(
      `${this.urlApi}/contacts/${contact.id}`,
      contact
    );
  }

  // add item in collection
  public add(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.urlApi}/contacts`, contact);
  }

  // get item by id in collection
}
