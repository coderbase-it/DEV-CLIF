import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'contactmanager';
  public open: boolean = true;

  /**
   * toggle
   */
  public toggle() {
    this.open = !this.open;
    console.log(this.open);
  }
}
