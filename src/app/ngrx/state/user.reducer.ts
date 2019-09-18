import * as userActions from '../state/user.action';
import { createFeatureSelector, createSelector, on, createReducer, Action } from '@ngrx/store';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { User } from '../model/user.model';
import * as fromRoot from '../../state/app-state';

export interface UserState extends EntityState<User> {
    selectedUserId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}


export interface AppState extends fromRoot.AppState {
    users: UserState;
}

export const userAdapter = createEntityAdapter< User>();

export const initialState: UserState = userAdapter.getInitialState({
    // additional entity state properties
    selectedUserId: null,
    loading: null,
    loaded: null,
    error: null,
  });


export const userReducer = createReducer(
    initialState,
  on(userActions.loadUsersSuccess, (state, { users }) => {
    return userAdapter.addAll(users, state)
  }),
  on(userActions.loadUsersFail, (state, { errorMessage }) => ({ ...state, isLoading: false, errorMessage })),
  on(userActions.loadUserSuccess, (state, { user }) => {
        return userAdapter.addOne(user, {...state,
            selectedUserId: user.id
        }) 
    }),
  on(userActions.deleteUserSuccess, (state, { id }) => {
        return userAdapter.removeOne(id, state);
      }),
  on(userActions.updateUser, (state, { user }) => {
        return userAdapter.updateOne(user, state);
    }),
)
export function reducer(state: UserState | undefined, action: Action) {
    return userReducer(state, action);
}
/* export function userReducer(
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
                selectedUserId: action.payload.id
            });
        }
        case userActions.UserActionTypes.LOAD_USER_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case userActions.UserActionTypes.UPDATE_USER_SUCCESS: {
            return userAdapter.updateOne(action.payload, state);
        }
        case userActions.UserActionTypes.UPDATE_USER_FAIL: {
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
} */

const getUserFeatureState = createFeatureSelector<UserState>(
    'users'
);
const {
    selectIds,
    selectEntities,
  } = userAdapter.getSelectors();
   
  // select the array of user ids
  export const selectUserIds = selectIds;
   
  // select the dictionary of user entities
  export const selectUserEntities = selectEntities;
   

export const getUsers = createSelector(
    getUserFeatureState,
    userAdapter.getSelectors().selectAll
);

export const getUsersLoading = createSelector(
    getUserFeatureState,
    (state: UserState) => state.loading
);

export const getUsersLoaded = createSelector(
    getUserFeatureState,
    (state: UserState) => state.loaded
);

export const getError = createSelector(
    getUserFeatureState,
    (state: UserState) => state.error
);

export const getCurrentUserId = createSelector(
    getUserFeatureState,
    (state: UserState) => state.selectedUserId
);
export const getCurrentUser = createSelector(
    getUserFeatureState,
    getCurrentUserId,
    state => state.entities[state.selectedUserId]
);
