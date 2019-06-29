import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) {

    http.get(this.url)
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      });
  }

  ngOnInit() {
  }

}
