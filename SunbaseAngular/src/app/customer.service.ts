import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private baseURL = "http://localhost:8080/api/customers";
  constructor(private httpClient:HttpClient) { }

  getCustomersList():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  createCustomer(Customer:Customer):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,Customer);
  }

  updateCustomer(Uuid: number, Customer: Customer): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${Uuid}`, Customer);
  }

  deleteCustomer(Uuid: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${Uuid}`);
  }
  getCustomerById(Uuid: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/${Uuid}`);
  }
}
