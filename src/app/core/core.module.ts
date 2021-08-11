import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAddContactComponent } from './pages/page-add-contact/page-add-contact.component';
import { PageEditContactComponent } from './pages/page-edit-contact/page-edit-contact.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageListContactsComponent } from './pages/page-list-contacts/page-list-contacts.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageListContactsComponent,
    PageAddContactComponent,
    PageEditContactComponent,
    PageNotFoundComponent,
    PageHomeComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
