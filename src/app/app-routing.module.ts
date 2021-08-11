import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageAddContactComponent } from './core/pages/page-add-contact/page-add-contact.component';
import { PageEditContactComponent } from './core/pages/page-edit-contact/page-edit-contact.component';
import { PageHomeComponent } from './core/pages/page-home/page-home.component';
import { PageListContactsComponent } from './core/pages/page-list-contacts/page-list-contacts.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'contacts', component: PageListContactsComponent },
  { path: 'contacts/add', component: PageAddContactComponent },
  { path: 'contacts/edit', component: PageEditContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
