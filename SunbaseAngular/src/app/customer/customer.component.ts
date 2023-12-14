import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
 
  Customer:Customer = new Customer();
  constructor(private CustomerService:CustomerService, 
        private router:Router){}

  saveCustomer(){
    this.CustomerService.createCustomer(this.Customer).subscribe(data=>{
      console.log(data);
      this.goToCustomerList();
    },
    error=>console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customer-list']);

  }
  onSubmit(){
    alert(this.Customer);
    console.log(this.Customer);
    this.saveCustomer();
    this.router.navigate(['/customer-list'])
  }
}
