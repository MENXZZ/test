import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenderComponentComponent } from './gender-component/gender-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GenderComponentComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
