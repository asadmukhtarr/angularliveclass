import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
