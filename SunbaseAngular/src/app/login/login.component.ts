import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login_id:string = '';
  password:string = '';
  message = "Signin pls..";
  constructor( private router:Router ){}

  loginEmployee(form: NgForm){
   
     if( this.login_id=="test@sunbasedata.com" && this.password=='Test@123'){
        this.router.navigate(['customer-list']);
        alert("Login Successful");}
     
      else
{
        this.router.navigate(['/']);
        alert("Sorry!! Invalid Credentials...");
        form.resetForm();
     }
    
  }
}
