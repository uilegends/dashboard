import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  employeeForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      salary: ['', Validators.required],
      job: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.employeeForm.invalid) {
      return;
    }

    console.log(this.employeeForm.value);



  }

}
