import { Employee } from './../../employee';
import { EmpserviceService } from './../../empservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {

  employeedata: Employee[];

  constructor(private employe: EmpserviceService,
    private router: Router) { }

  ngOnInit() {
    this.employe.getFullemployee().subscribe((empData) => {
      this.employeedata = empData;
    });
  }

  empEdit(employeedata: Employee) {
    localStorage.setItem('editId', employeedata.id.toString());
    this.router.navigate(['employee/edit']);
    // return;
  }

}
