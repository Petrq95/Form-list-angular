import * as postActions from '../state/post.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';

import { Post } from '../model/post.model';
import * as fromRoot from '../../state/app-state';


export interface PostState  {
    posts: Post[];
    loading: boolean;
    loaded: boolean;
    error: string;
}
export interface AppState extends fromRoot.AppState {
    posts: PostState;
}
export const  initialState: PostState = {
    posts: [],
    loading: false,
    loaded: false,
    error: ''

};

export function postReducer(state = initialState, action: postActions.Action): PostState {
    switch (action.type) {
        case postActions.PostActionTypes.LOAD_POSTS: {
            return {
                ...state,
                loading: true
            };
        }
        case postActions.PostActionTypes.LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                posts: action.payload
            };
        }
        case postActions.PostActionTypes.LOAD_POSTS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
const getPostFeatureState = createFeatureSelector<PostState>(
    'posts'
);

export const getPosts = createSelector(
    getPostFeatureState,
    (state: PostState) => state.posts
);
export const getPostsLoading = createSelector(
    getPostFeatureState,
    (state: PostState) => state.loading
);

export const getPostsloaded = createSelector(
    getPostFeatureState,
    (state: PostState) => state.loaded
);
export const getError = createSelector(
    getPostFeatureState,
    (state: PostState) => state.error
);


