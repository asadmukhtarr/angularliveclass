import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';

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
  Customerbox : boolean = true;
  customerdata = {
    name: '',
    email:'',
    whatsapp:'',
    city:''
  }
  constructor(public customer:CustomerService) {
    this.customer.testingService();
  }

  async ngOnInit(): Promise<void> {
    await this.customer.getMydata();
    this.customers = this.customer.customers;
}
  abc(content: any) {
    this.title = content;
  }
  tester(){
    if(this.Customerbox === true){
      this.Customerbox = false;
    } else {
      this.Customerbox = true;
    }
  }
  InsertCustomer(){
     // console.log(this.customerdata);
    fetch("https://66a26d1d967c89168f200e0b.mockapi.io/api/customers/customers",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.customerdata),
    }).then((response) => response.json()).then((data) => console.log(data));
    this.customer.getMydata();
    this.customers = this.customer.customers;
  }
}
