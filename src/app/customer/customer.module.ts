import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-alerts';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [FeedbackComponent, SignupComponent, ProductComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CustomerRoutingModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'left' }),

  ]
})
export class CustomerModule { }
