import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PostService } from '../post.service';
import * as postAction from '../state/post.action';
import { Post } from '../model/post.model';

@Injectable()

export class PostEffect {
    constructor(
        private actions$: Actions,
        private postService: PostService
    ) { }

    @Effect()
    loadPosts$: Observable<Action> = this.actions$.pipe(
        ofType<postAction.LoadPosts>(
            postAction.PostActionTypes.LOAD_POSTS
        ),
        mergeMap((action: postAction.LoadPosts) =>
            this.postService.getPosts().pipe(
                map(
                    (posts: Post[]) =>
                        new postAction.LoadPostsSuccess(posts)
                ),
                catchError(err => of(new postAction.LoadPostsFail(err)))
            )
        )
    );

    @Effect()
    loadPost$: Observable<Action> = this.actions$.pipe(
        ofType<postAction.LoadPost>(
            postAction.PostActionTypes.LOAD_POST
        ),
        mergeMap((action: postAction.LoadPost) =>
            this.postService.getPostById(action.payload).pipe(
                map(
                    (post: Post) =>
                        new postAction.LoadPostSuccess(post)
                ),
                catchError(err => of(new postAction.LoadPostFail(err)))
            )
        )
    );
}
