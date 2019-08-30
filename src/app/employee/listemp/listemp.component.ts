import { Employee } from './../../employee';
import { EmpserviceService } from './../../empservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {

  employeedata: Employee[];

  constructor(private employe: EmpserviceService) { }

  ngOnInit() {
    this.employe.getFullemployee().subscribe((empData) => {
      this.employeedata = empData;
    });
  }

  updateEmp(employeedata: Employee) {

  }

}
