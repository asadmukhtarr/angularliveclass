import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  customers:any[] = [];
  constructor(public customerService:CustomerService){
    console.log(this.customers)
  }
  async ngOnInit(): Promise<void> {
      await this.customerService.getMydata();
      this.customers = this.customerService.customers;
  }
}
