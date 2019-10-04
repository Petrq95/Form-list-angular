import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable} from 'rxjs';

import * as postActions from '../state/post.action';
import * as fromPost from '../state/post.reducer';
import { Post } from '../model/post.model';
import { map } from 'rxjs/operators';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-posts.table',
  templateUrl: './posts.table.component.html',
  styleUrls: ['./posts.table.component.css']
})
export class PostsTableComponent implements OnInit {
  posts$: Observable<Post[]>;
  displayedColumns: string[] = ['id', 'title', 'userId'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  

  

  constructor(private store: Store<fromPost.AppState>) { }
  ngOnInit() {
    this.store.dispatch(new postActions.LoadPosts());
    this.posts$ = this.store.pipe(select(fromPost.getPosts))
      this.posts$.subscribe((posts) =>{
      const somePosts = posts
        this.dataSource = new MatTableDataSource<Post>(somePosts)
        this.dataSource.paginator = this.paginator;
    })
    
  }
  loadPosts(){
    
  }
   

}
