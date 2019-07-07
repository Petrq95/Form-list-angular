import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as userActions from '../state/user.action';
import * as fromUser from '../state/user.reducer';
import { User } from '../model/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromUser.AppState>
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required],
      id: null
    });

    const user$: Observable<User> = this.store.select(
      fromUser.getCurrentuser
    );

    user$.subscribe(currentuser => {
      if (currentuser) {
        this.userForm.patchValue({
          name: currentuser.name,
          phone: currentuser.phone,
          email: currentuser.email,
          website: currentuser.website,
          id: currentuser.id
        });
      }
    });
  }

  updateUser() {
    const updateduser: User = {
      name: this.userForm.get('name').value,
      phone: this.userForm.get('phone').value,
      email: this.userForm.get('email').value,
      website: this.userForm.get('website').value,
      id: this.userForm.get('id').value
    };

    this.store.dispatch(new userActions.UpdateUser(updateduser));
  }

}
