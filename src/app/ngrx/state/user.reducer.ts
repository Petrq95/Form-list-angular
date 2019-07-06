import * as userActions from '../state/user.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { User } from '../model/user.model';
import * as fromRoot from '../../state/app-state';

export interface UserState extends EntityState<User> {
    selecteduserId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    users: UserState;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<
    User
>();

export const defaultuser: UserState = {
    ids: [],
    entities: {},
    selecteduserId: null,
    loading: false,
    loaded: false,
    error: ''
};

export const initialState = userAdapter.getInitialState(defaultuser);

export function userReducer(
    state = initialState,
    action: userActions.Action
): UserState {
    switch (action.type) {
        case userActions.UserActionTypes.LOAD_USERS_SUCCESS: {
            return userAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        }
        case userActions.UserActionTypes.LOAD_USERS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

        case userActions.UserActionTypes.LOAD_USER_SUCCESS: {
            return userAdapter.addOne(action.payload, {
                ...state,
                selecteduserId: action.payload.id
            });
        }
        case userActions.UserActionTypes.LOAD_USER_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }


        case userActions.UserActionTypes.DELETE_USER_SUCCESS: {
            return userAdapter.removeOne(action.payload, state);
        }
        case userActions.UserActionTypes.DELETE_USER_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

const getuserFeatureState = createFeatureSelector<UserState>(
    'users'
);

export const getusers = createSelector(
    getuserFeatureState,
    userAdapter.getSelectors().selectAll
);

export const getusersLoading = createSelector(
    getuserFeatureState,
    (state: UserState) => state.loading
);

export const getusersLoaded = createSelector(
    getuserFeatureState,
    (state: UserState) => state.loaded
);

export const getError = createSelector(
    getuserFeatureState,
    (state: UserState) => state.error
);

export const getCurrentuserId = createSelector(
    getuserFeatureState,
    (state: UserState) => state.selecteduserId
);
export const getCurrentuser = createSelector(
    getuserFeatureState,
    getCurrentuserId,
    state => state.entities[state.selecteduserId]
);
