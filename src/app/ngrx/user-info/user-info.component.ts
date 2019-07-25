import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { Observable} from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Router } from '@angular/router';
import * as userActions from '../state/user.action';
import * as fromUser from '../state/user.reducer';
import { User } from '../model/user.model';




@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user$: Observable<User>;
  // tslint:disable-next-line: ban-types
  loading: Observable<Boolean>;
  constructor(
    private store: Store<fromUser.UserState>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.user$ = this.store.select(fromUser.getCurrentUser);
    this.loading = this.store.select(state => state.loading);
  }

}
