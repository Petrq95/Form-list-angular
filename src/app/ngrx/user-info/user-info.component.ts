import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';

import { Observable } from 'rxjs';

import * as userActions from '../state/user.action';
import * as fromUser from '../state/user.reducer';
import { User } from '../model/user.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  users$: Observable<User[]>;
  // tslint:disable-next-line: ban-types
  error$: Observable<String>;
  userForm: FormGroup;
  disableInput = true;
  constructor(
    private store: Store<fromUser.AppState>,
    private fb: FormBuilder,
  ) { }
  ngOnInit() {
    this.store.dispatch(new userActions.LoadUsers());
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
    // tslint:disable-next-line: deprecation
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
      this.userForm.controls.name.disable();
      this.userForm.controls.phone.disable();
      this.userForm.controls.email.disable();
      this.userForm.controls.website.disable();
  });
}
}
