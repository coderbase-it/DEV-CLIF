import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-page-display-contact',
  templateUrl: './page-display-contact.component.html',
  styleUrls: ['./page-display-contact.component.scss'],
})
export class PageDisplayContactComponent implements OnInit {
  contact!: Contact;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id) {
        this.contactService.get(id).subscribe(
          (data) => (this.contact = data),
          () => this.router.navigate(['404'])
        );
      }
    });
  }
}
