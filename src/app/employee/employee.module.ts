import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AddempComponent } from './addemp/addemp.component';
import { ListempComponent } from './listemp/listemp.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [AddempComponent, ListempComponent, UpdateComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
