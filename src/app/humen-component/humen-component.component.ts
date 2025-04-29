import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-humen-component',
  imports: [HttpClientModule],
  standalone: true,
  templateUrl: './humen-component.component.html',
  styleUrls: ['./humen-component.component.css']   // <-- fixed here
})
export class HumenComponentComponent implements OnInit {
  humen: any = '============================loading...======================';   // <-- fixed here

  constructor(private http: HttpClient) {}
  ngOnInit() {   // <-- fixed name
    this.fetchData();
  }

  fetchData() {
    this.http.get('https://api.example.com/humen')
      .subscribe(
        (data: any) => {
          this.humen = data;
        },
        (error: any) => {
          console.error('Error fetching data', error);
        }
      );
  }
}
