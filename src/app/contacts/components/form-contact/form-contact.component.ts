import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  @Input() init!: Contact;
  @Output() submitted = new EventEmitter<Contact>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.init.name],
      email: [this.init.email],
      phone: [this.init.phone],
      status: [this.init.status],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    this.submitted.emit(this.form.value);
  }
}
