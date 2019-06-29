import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  users: any;
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(http: HttpClient) {

    http.get(this.url)
      .subscribe(response => {
        console.log(response);
        this.users = response;
      });
  }

  ngOnInit() {
  }

}
