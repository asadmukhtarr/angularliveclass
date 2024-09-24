import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
    this.getMydata();
   }
  customers:any[] = [];
  testingService(){
      console.log("test by service done");
  }
  async getMydata() {
    //      fetch().then(response => response.json()).then(data => console.log())
      const response = await fetch('https://66a26d1d967c89168f200e0b.mockapi.io/api/customers/customers');
      const data = await response.json(); // converting into json format ..
      this.customers = data; // all data from api storing into customer variable ..
      // console.log(this.customers.length); // Log after data is assigned
  }
}
