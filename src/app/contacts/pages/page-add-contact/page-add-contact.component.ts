import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-page-add-contact',
  templateUrl: './page-add-contact.component.html',
  styleUrls: ['./page-add-contact.component.scss'],
})
export class PageAddContactComponent implements OnInit {
  public contact = new Contact();
  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {}

  public action(contact: Contact): void {
    this.contactService.add(contact).subscribe((res) => {
      //error codes
      this.redirectTo('contacts');
    });
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
}
