import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from '../../../contacts/models/contact';
import { ContactService } from '../../../contacts/services/contact.service';
import { StateContact } from '../../enums/state-contact';

@Component({
  selector: 'app-page-list-contacts',
  templateUrl: './page-list-contacts.component.html',
  styleUrls: ['./page-list-contacts.component.scss'],
})
export class PageListContactsComponent implements OnInit {
  closeResult = ''; // ngbootstrap property for modal
  contacts: Contact[] = [];
  userIcon = faUser;
  public statuses = Object.values(StateContact);
  constructor(
    private contactService: ContactService,
    private modalService: NgbModal // ngbootstrap injection for modal
  ) {
    this.contactService
      .list()
      .subscribe((data: Contact[]) => (this.contacts = data));
  }

  public changeStatus(contact: Contact, event: any): void {
    const status = event.target.value;
    this.contactService
      .changeState(contact, status)
      .subscribe((res) => Object.assign(contact, res));
  }

  // ngbootstrap methods used for the form in a modal popup | open() & getDismissReason()
  // ngbootstrap method open()
  open(content: any) {
    this.modalService.open(content, { size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  // ngbootstrap method getDismissReason()
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {}
}
