import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-page-edit-contact',
  templateUrl: './page-edit-contact.component.html',
  styleUrls: ['./page-edit-contact.component.scss'],
})
export class PageEditContactComponent implements OnInit {
  public contact!: Contact;
  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {}

  public action(contact: Contact): void {
    this.contactService
      .update(contact)
      .subscribe((res) => this.router.navigate(['contacts']));
  }
}
