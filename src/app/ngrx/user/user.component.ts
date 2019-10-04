import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as userActions from '../state/user.action';
import * as fromUser from '../state/user.reducer';
import { User} from '../model/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private store: Store<fromUser.AppState>,
              private fb: FormBuilder,
              private router: Router,
              ) { }
  users$: Observable<User[]>;
// tslint:disable-next-line: ban-types
  error$: Observable<String>;
  userForm: FormGroup;
  user$: Observable<User> = this.store.select(
    fromUser.getCurrentUser
  );
  selectedUser: User;
  hideSpinner() {
    const spinnerVisible = document.getElementById('spinner');
    if (spinnerVisible.style.display === 'block') {
      spinnerVisible.style.display = 'none';
    }
  }
  ngOnInit() {
    this.store.dispatch(userActions.loadUsers());
    this.users$ = this.store.pipe(select(fromUser.getUsers));
    this.error$ = this.store.pipe(select(fromUser.getError));
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required],
      id: null
    });

    const user$: Observable<User> = this.store.select(
      fromUser.getCurrentUser
    );

    user$.subscribe(currentUser => {
      if (currentUser) {
        this.userForm.patchValue({
          name: currentUser.name,
          phone: currentUser.phone,
          email: currentUser.email,
          website: currentUser.website,
          id: currentUser.id
        });
      }
    });
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  deleteUser(user: User) {
    if (confirm('Are You Sure You want to Delete the User?')) {
      this.store.dispatch(userActions.deleteUser({id: user.id}))
    }
  }
  editUserInfo(user: User) {
    this.router.navigate(['ngrx/info', user.name]);
  }
  editUser(user: User) {

    this.store.dispatch(userActions.loadUserSuccess({user}));
  }
updateUser() {
    const updatedUser: User = {
      name: this.userForm.get('name').value,
      phone: this.userForm.get('phone').value,
      email: this.userForm.get('email').value,
      website: this.userForm.get('website').value,
      id: this.userForm.get('id').value
    };

    this.store.dispatch(userActions.updateUserSuccess({user: {id: updatedUser.id, changes: updatedUser}}));
  }
  visabilitiPost() {
  const postVisible = document.getElementById('myPost');
  if (postVisible.style.display === 'none') {
    postVisible.style.display = 'block';
  }
}

}

