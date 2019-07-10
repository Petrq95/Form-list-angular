import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PostService } from '../post.service';
import * as PostActions from '../state/post.action';
import { Post } from '../model/post.model';

@Injectable()
export class PostEffect {
    constructor(
        private actions$: Actions,
        private postService: PostService
    ) { }

    @Effect()
    loadPosts$: Observable<Action> = this.actions$.pipe(
        ofType<PostActions.LoadPosts>(
            PostActions.PostActionTypes.LOAD_POSTS
        ),
        mergeMap((action: PostActions.LoadPosts) =>
            this.postService.getPosts().pipe(
                map(
                    (Posts: Post[]) =>
                        new PostActions.LoadPostsSuccess(Posts)
                ),
                catchError(err => of(new PostActions.LoadPostsFail(err)))
            )
        )
    );

    @Effect()
    loadPost$: Observable<Action> = this.actions$.pipe(
        ofType<PostActions.LoadPost>(
            PostActions.PostActionTypes.LOAD_POSTS
        ),
        mergeMap((action: PostActions.LoadPost) =>
            this.postService.getPostById(action.payload).pipe(
                map(
                    (post: Post) =>
                        new PostActions.LoadPostSuccess(post)
                ),
                catchError(err => of(new PostActions.LoadPostFail(err)))
            )
        )
    ); }
