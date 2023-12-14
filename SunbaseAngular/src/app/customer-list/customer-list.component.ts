import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  customers: Customer[] = [ ];
update: any;
Customer: any;
 
   constructor(private CustomerService:CustomerService, private router: Router){}
  ngOnInit():void{
   this.getCustomers();
  }
  private getCustomers() {
    this.CustomerService.getCustomersList().subscribe(data=>{
      this.customers=data;
    });}
    
  updateCustomer(hid: number){
    this.router.navigate(['update-Customer', hid]);
  }
  deleteCustomer(hid: number) {
    const confirmed = window.confirm("Are you sure you want to delete the Customer?");
    if (confirmed) {
      this.CustomerService.deleteCustomer(hid).subscribe(data => {
        console.log(data);
        this.getCustomers();
      });
    } else {
      
    }
  }
}
