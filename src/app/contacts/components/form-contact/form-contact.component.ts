import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebSocketService } from 'src/app/core/services/web-socket.service';
import { StateContact } from '../../enums/state-contact';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
})
export class FormContactComponent implements OnInit {
  public statuses = Object.values(StateContact);
  public form!: FormGroup;
  public formMsg = '';
  @Input() init!: Contact;
  @Output() submitted = new EventEmitter<Contact>();
  constructor(
    private fb: FormBuilder,
    private webSocketService: WebSocketService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.init.name],
      email: [this.init.email],
      phone: [this.init.phone],
      status: [this.init.status],
      id: [this.init._id],
    });

    this.form.valueChanges.subscribe(() => {
      this.webSocketService.sendFormFilling();
    });
    this.webSocketService.getOthersFillingForm().subscribe(() => {
      this.formMsg = 'someone is editing this form';
    });
  }

  public onSubmit() {
    this.submitted.emit(this.form.value);
  }
}
