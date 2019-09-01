import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { EmpserviceService } from 'src/app/empservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;
  employeedata: Employee;
  constructor(private formBuilder: FormBuilder, private myservice: EmpserviceService) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      id: [],
      fullname: ['', Validators.required],
      salary: ['', Validators.required],
      job: ['', Validators.required]
    });
    let editId: number = parseInt(localStorage.getItem('editId'));
    // console.log(editId);

    this.myservice.getSingleEmployee(editId).subscribe(data => {
      this.employeeForm.setValue(data);
    })

  }

  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }


  onUpdate() {
    this.submitted = true;
    // stop here if form is invalid
    if (!this.employeeForm.invalid) {
      this.employeedata = { ...this.employeeForm.value };
      this.myservice.updateEmployee(this.employeedata).subscribe(data => {
        // this.employeeForm.setValue(data);
      });
      // console.log(this.employeeForm.value.fullname);

    } else {
      console.log('Form Not Valid');
    }

  }

}
