import { Employee } from './../../employee';
import { EmpserviceService } from './../../empservice.service';
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
  employeedata: Employee;
  constructor(private formBuilder: FormBuilder, private myservice: EmpserviceService) { }

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
    if (!this.employeeForm.invalid) {
      this.employeedata = { ...this.employeeForm.value };
      this.myservice.postEmployee(this.employeedata).subscribe(data => {
        console.log('Form submitted successfully');
      });
      // console.log(this.employeeForm.value.fullname);

    } else {
      console.log('Form Not Valid');
    }





  }

}
