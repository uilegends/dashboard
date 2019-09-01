import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  employee: Employee[];
  constructor(private http: HttpClient) {

  }

  getFullemployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(BASE_URL);
  }

  getSingleEmployee(employee: number): Observable<Employee> {
    return this.http.get<Employee>(BASE_URL + "/" + employee);
  }

  postEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(BASE_URL, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(BASE_URL + '/' + employee.id, employee);
  }
}
