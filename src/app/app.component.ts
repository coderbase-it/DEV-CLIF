import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { WebSocketService } from './core/services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private webSocketService: WebSocketService) {}
  public title = 'contactmanager';
  public logo = faHome;
  public notif = 0;

  ngOnInit() {
    this.webSocketService.subContactCreate().subscribe((data) => {
      if (data) this.notif += 1;
    });
  }
}
