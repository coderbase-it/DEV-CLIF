import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddContactComponent } from './pages/page-add-contact/page-add-contact.component';
import { PageDisplayContactComponent } from './pages/page-display-contact/page-display-contact.component';
import { PageEditContactComponent } from './pages/page-edit-contact/page-edit-contact.component';
import { PageListContactsComponent } from './pages/page-list-contacts/page-list-contacts.component';

const routes: Routes = [
  { path: 'contacts', component: PageListContactsComponent },
  { path: 'contacts/add', component: PageAddContactComponent },
  { path: 'contacts/edit', component: PageEditContactComponent },
  { path: 'contacts/:id', component: PageDisplayContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
