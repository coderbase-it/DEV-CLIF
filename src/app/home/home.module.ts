import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { PageHomeComponent } from './pages/page-home/page-home.component';

@NgModule({
  declarations: [PageHomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
