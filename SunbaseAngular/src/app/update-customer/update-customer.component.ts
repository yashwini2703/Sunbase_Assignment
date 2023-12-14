import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {

  Uuid!: number;
  Customer: Customer = new Customer();
  constructor(private CustomerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.Uuid = this.route.snapshot.params['Uuid'];

    this.CustomerService.getCustomerById(this.Uuid).subscribe((data: Customer) => {
      this.Customer = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.CustomerService.updateCustomer(this.Uuid, this.Customer).subscribe( data =>{
      this.goToCustomerList();
    }
    , error => console.log(error));
    this.router.navigate(['/customer-list'])
  }

  goToCustomerList(){
    this.router.navigate(['/customer-list']);
  }
}
