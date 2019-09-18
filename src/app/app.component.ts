import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private apiURL = 'https://api.graph.cool/simple/v1/cjz1vy2831c1i01969m0rhdug';

  constructor(private http: HttpClient) {
    this.allUsers();
  }

  allUsers() {
    const body = {
      query: `
        query {
          allUsers {
            id
            name
            email
          }
        }
      `
    };

    this.http.post(this.apiURL, body).subscribe(response => {
      console.log(response);
    });

  }

}
