import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UserService } from '../user.service';
import * as UserActions from '../state/user.action';
import { User } from '../model/user.model';

@Injectable()
export class UserEffect {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    @Effect()
    loadUsers$: Observable<Action> = this.actions$.pipe(
        ofType<UserActions.LoadUsers>(
            UserActions.UserActionTypes.LOAD_USERS
        ),
        mergeMap((action: UserActions.LoadUsers) =>
            this.userService.getUsers().pipe(
                map(
                    (Users: User[]) =>
                        new UserActions.LoadUsersSuccess(Users)
                ),
                catchError(err => of(new UserActions.LoadUsersFail(err)))
            )
        )
    );

    @Effect()
    loadUser$: Observable<Action> = this.actions$.pipe(
        ofType<UserActions.LoadUser>(
            UserActions.UserActionTypes.LOAD_USER
        ),
        mergeMap((action: UserActions.LoadUser) =>
            this.userService.getUserById(action.payload).pipe(
                map(
                    (user: User) =>
                        new UserActions.LoadUserSuccess(user)
                ),
                catchError(err => of(new UserActions.LoadUserFail(err)))
            )
        )
    );



    @Effect()
    deleteUser$: Observable<Action> = this.actions$.pipe(
        ofType<UserActions.DeleteUser>(
            UserActions.UserActionTypes.DELETE_USER
        ),
        map((action: UserActions.DeleteUser) => action.payload),
        mergeMap((id: number) =>
            this.userService.deleteUser(id).pipe(
                map(() => new UserActions.DeleteUserSuccess(id)),
                catchError(err => of(new UserActions.DeleteUserFail(err)))
            )
        )
    );
}
