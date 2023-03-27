import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup = new FormGroup({email: new FormControl('', [Validators.required, Validators.email]),
                                  body: new FormControl('', Validators.required)});
  constructor() { }

  ngOnInit(): void {
  }

}
