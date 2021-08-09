import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { PageAddContactComponent } from './pages/page-add-contact/page-add-contact.component';
import { PageListContactsComponent } from './pages/page-list-contacts/page-list-contacts.component';
import { PageEditContactComponent } from './pages/page-edit-contact/page-edit-contact.component';
import { PageDisplayContactComponent } from './pages/page-display-contact/page-display-contact.component';


@NgModule({
  declarations: [
    PageAddContactComponent,
    PageListContactsComponent,
    PageEditContactComponent,
    PageDisplayContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
