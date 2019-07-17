import { Action } from '@ngrx/store';

import { Post } from '../model/post.model';

export enum PostActionTypes {
    LOAD_POSTS = '[Post] Load Posts',
    LOAD_POSTS_SUCCESS = '[Post] Load Posts Success',
    LOAD_POSTS_FAIL = '[Post] Load Posts Fail',
    LOAD_POST = '[Post] Load Post',
    LOAD_POST_SUCCESS = '[Post] Load Post Success',
    LOAD_POST_FAIL = '[Post] Load Post Fail',
}

export class LoadPosts implements Action {
    readonly type = PostActionTypes.LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_SUCCESS;

    constructor(public payload: Post[]) { }
}

export class LoadPostsFail implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_FAIL;

    constructor(public payload: string) { }
}

export class LoadPost implements Action {
    readonly type = PostActionTypes.LOAD_POST;

    constructor(public payload: number) { }
}

export class LoadPostSuccess implements Action {
    readonly type = PostActionTypes.LOAD_POST_SUCCESS;

    constructor(public payload: Post) { }
}

export class LoadPostFail implements Action {
    readonly type = PostActionTypes.LOAD_POST_FAIL;

    constructor(public payload: string) { }
}



export type Action =
    | LoadPosts
    | LoadPostsSuccess
    | LoadPostsFail
    | LoadPost
    | LoadPostSuccess
    | LoadPostFail;

