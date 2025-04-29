import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllComponentComponent} from './all-component/all-component.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AllComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
