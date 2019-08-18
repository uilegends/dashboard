import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { AddnewComponent } from './addnew/addnew.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AddnewComponent, ViewComponent],
  imports: [
    CommonModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
