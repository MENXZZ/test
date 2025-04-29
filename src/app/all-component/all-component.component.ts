import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here
import { UserComponentComponent } from '../user-component/user-component.component';
@Component({
  selector: 'app-all-component',
  standalone: true, // ✅ ADD THIS
  imports: [UserComponentComponent,
    HttpClientModule   // ✅ ADD THIS to support HttpClient
  ],
  templateUrl: './all-component.component.html',
  styleUrls: ['./all-component.component.css'], // ✅ correct spelling: "styleUrls" (not "styleUrl")
})
export class AllComponentComponent implements OnInit {
  //hello: string = 'Loading...'; // Default message

  hello: any = { title: 'Loading...', id: '' }; // Set hello as an object

  constructor(private http: HttpClient) { } // Inject HttpClient

  ngOnInit() {
    this.fetchData(); // Fetch data when component initializes
  }

  fetchData() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1') // Example API URL
      .subscribe(response => {
        console.log(response); // Log response for debugging
        this.hello = response; // Use title from API as "hello"
      }, error => {
        console.error('API error', error);
        this.hello = 'Failed to load data'; // Error message if the API fails
      });
  }
}
