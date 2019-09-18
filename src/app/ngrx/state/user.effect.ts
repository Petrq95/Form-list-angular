import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import { UserService } from '../user.service';
import * as userActions from '../state/user.action';
import { User } from '../model/user.model';

@Injectable()
export class UserEffect {
    constructor(
        private actions$: Actions,
        private userService: UserService,
    ) { }
    loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      switchMap(action =>
        this.userService.getUsers().pipe(
          map(users => userActions.loadUsersSuccess({ users })),
          catchError(error => of(error))
        )
      )
    )
  );
  
  /* loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.loadUser),
        switchMap(( action) =>
            this.userService.getUserById(action.payload).pipe(
            map(user => userActions.loadUserSuccess({ user })),
            catchError(error => of(error))
            )
        )
    )
    );
   
/*     updateUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(userActions.updateUser),
    switchMap(action =>
      this.userService.updateUser(action.user).pipe(
        map(user => userActions.updateUserSuccess({ ,
            changes: userActions.updateUser })),
        catchError(error => of(error))
      )
    )
  )
);  

  

    deleteUser$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.deleteUser),
        switchMap(( action) =>
            this.userService.deleteUser(action.id).pipe(
            map((id: number) => userActions.deleteUserSuccess({id })),
            catchError(error => of(error))
            )
        )
    )
    );
 */

   /*  @Effect()
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
    updateUser$: Observable<Action> = this.actions$.pipe(
        ofType<UserActions.UpdateUser>(
            UserActions.UserActionTypes.UPDATE_USER
        ),
        map((action: UserActions.UpdateUser) => action.payload),
        mergeMap((user: User) =>
            this.userService.updateUser(user).pipe(
                map(
                    (updateUser: User) =>
                        new UserActions.UpdateUserSuccess({
                            id: updateUser.id,
                            changes: updateUser
                        })
                ),
                catchError(err => of(new UserActions.UpdateUserFail(err)))
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
 */
}