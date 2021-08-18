import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent, PageHomeComponent],
  imports: [CommonModule],
})
export class CoreModule {}
