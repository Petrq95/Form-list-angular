import {createAction, props } from '@ngrx/store';

import { Update } from '@ngrx/entity';

import { User } from '../model/user.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: User[] }>());

export const loadUsersFail = createAction('[Users] Load Fail', props<{ errorMessage: string }>());

export const loadUserSuccess = createAction('[User] Load User Success', props<{ user: User }>());

export const loadUserFail = createAction('[Users] Load User Fail', props<{ errorMessage: string }>());

export const updateUser = createAction('[User] Load User Success', props<{ user: User }>());

export const updateUserSuccess = createAction('[User/API] Update User', props<{ user: Update<User> }>());

export const updateUserFail = createAction('[Users] Update User Fail', props<{ errorMessage: string }>());

export const deleteUser = createAction('[User] Delete User', props<{ id:number }>());

export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ id: number }>());

export const deleteUserFail = createAction('[Users] Delete User Fail', props<{ errorMessage: string }>());
































/* export enum UserActionTypes {
    LOAD_USERS = '[User] Load Users',
    LOAD_USERS_SUCCESS = '[User] Load Users Success',
    LOAD_USERS_FAIL = '[User] Load Users Fail',
    LOAD_USER = '[User] Load User',
    LOAD_USER_SUCCESS = '[User] Load User Success',
    LOAD_USER_FAIL = '[User] Load User Fail',
    UPDATE_USER = '[User] Update User',
    UPDATE_USER_SUCCESS = '[User] Update User Success',
    UPDATE_USER_FAIL = '[User] Update User Fail',
    DELETE_USER = '[User] Delete User',
    DELETE_USER_SUCCESS = '[User] Delete User Success',
    DELETE_USER_FAIL = '[User] Delete User Fail'
}

export class LoadUsers implements Action {
    readonly type = UserActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
    readonly type = UserActionTypes.LOAD_USERS_SUCCESS;

    constructor(public payload: User[]) { }
}

export class LoadUsersFail implements Action {
    readonly type = UserActionTypes.LOAD_USERS_FAIL;

    constructor(public payload: string) { }
}

export class LoadUser implements Action {
    readonly type = UserActionTypes.LOAD_USER;

    constructor(public payload: number) { }
}

export class LoadUserSuccess implements Action {
    readonly type = UserActionTypes.LOAD_USER_SUCCESS;

    constructor(public payload: User) { }
}

export class LoadUserFail implements Action {
    readonly type = UserActionTypes.LOAD_USER_FAIL;

    constructor(public payload: string) { }
}


export class UpdateUser implements Action {
    readonly type = UserActionTypes.UPDATE_USER;

    constructor(public payload: User) { }
}

export class UpdateUserSuccess implements Action {
    readonly type = UserActionTypes.UPDATE_USER_SUCCESS;

    constructor(public payload: Update<User>) { }
}

export class UpdateUserFail implements Action {
    readonly type = UserActionTypes.UPDATE_USER_FAIL;

    constructor(public payload: string) { }
}

export class DeleteUser implements Action {
    readonly type = UserActionTypes.DELETE_USER;

    constructor(public payload: number) { }
}

export class DeleteUserSuccess implements Action {
    readonly type = UserActionTypes.DELETE_USER_SUCCESS;

    constructor(public payload: number) { }
}

export class DeleteUserFail implements Action {
    readonly type = UserActionTypes.DELETE_USER_FAIL;

    constructor(public payload: string) { }
}

export type Action =
    | LoadUsers
    | LoadUsersSuccess
    | LoadUsersFail
    | LoadUser
    | LoadUserSuccess
    | LoadUserFail
    | UpdateUser
    | UpdateUserSuccess
    | UpdateUserFail
    | DeleteUser
    | DeleteUserSuccess
    | DeleteUserFail;
 */