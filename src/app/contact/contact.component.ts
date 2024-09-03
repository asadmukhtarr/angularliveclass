import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Fixed typo here
})
export class ContactComponent {
  title = "Hello Sir! I am Asad";
  reglious = "Muslim";
  myclass = "card-header bg-danger text-white";
  customers: any[] = [];
  
  constructor() {
    this.getMydata();
  }

  abc(content: any) {
    this.title = content;
  }

  async getMydata() {
//      fetch().then(response => response.json()).then(data => console.log())
      const response = await fetch('https://66a26d1d967c89168f200e0b.mockapi.io/api/customers/customers');
      const data = await response.json(); // converting into json format ..
      this.customers = data; // all data from api storing into customer variable ..
     // console.log(this.customers.length); // Log after data is assigned
  }
}
