import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as userActions from '../state/user.action';
import * as fromUser from '../state/user.reducer';

import { User} from '../model/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;
// tslint:disable-next-line: ban-types
  error$: Observable<String>;

  constructor(private store: Store<fromUser.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new userActions.LoadUsers());
    this.users$ = this.store.pipe(select(fromUser.getusers));
    this.error$ = this.store.pipe(select(fromUser.getError));
  }

  deleteUser(user: User) {
    if (confirm('Are You Sure You want to Delete the User?')) {
      this.store.dispatch(new userActions.DeleteUser(user.id));
    }
  }

  editUser(user: User) {
    this.store.dispatch(new userActions.LoadUser(user.id));
  }
}
