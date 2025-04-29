import { Component } from '@angular/core';
import { HumenComponentComponent } from '../humen-component/humen-component.component';

@Component({
  selector: 'app-gender-component',
  imports: [HumenComponentComponent],
  templateUrl: './gender-component.component.html',
  styleUrls: ['./gender-component.component.css']   // <-- fixed here
})
export class GenderComponentComponent {

}
