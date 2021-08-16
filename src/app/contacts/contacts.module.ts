import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from './components/btn/btn.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { StateDirective } from './directives/state.directive';
import { PageAddContactComponent } from './pages/page-add-contact/page-add-contact.component';
import { PageDisplayContactComponent } from './pages/page-display-contact/page-display-contact.component';
import { PageEditContactComponent } from './pages/page-edit-contact/page-edit-contact.component';
import { PageListContactsComponent } from './pages/page-list-contacts/page-list-contacts.component';

@NgModule({
  declarations: [
    PageDisplayContactComponent,
    PageAddContactComponent,
    PageEditContactComponent,
    PageListContactsComponent,
    StateDirective,
    BtnComponent,
    FormContactComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    PageAddContactComponent,
    PageDisplayContactComponent,
    PageEditContactComponent,
    PageListContactsComponent,
    StateDirective,
  ],
})
export class ContactsModule {}
