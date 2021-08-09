import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddContactComponent } from './pages/page-add-contact/page-add-contact.component';
import { PageEditContactComponent } from './pages/page-edit-contact/page-edit-contact.component';
import { PageListContactsComponent } from './pages/page-list-contacts/page-list-contacts.component';

const routes: Routes = [
  { path: '', component: PageListContactsComponent },
  { path: 'add', component: PageAddContactComponent },
  { path: 'edit', component: PageEditContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
