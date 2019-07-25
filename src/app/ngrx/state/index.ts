import { createSelector } from '@ngrx/store';
import {Post} from '../model/post.model';
import {User} from '../model/user.model';
import * as fromPost from '../state/post.reducer';
import * as fromUser from '../state/user.reducer';



export const selectVisiblePosts = createSelector(
    fromUser.getCurrentUser,
    fromPost.getPosts,
    (getCurrentUser: User, posts: Post[]) => {
        if (getCurrentUser && posts) {
            return posts.filter((post: Post) => post.userId === getCurrentUser.id);
        } else {
            return posts;
        }
    }
);
export const userInfo = createSelector(
    fromUser.getCurrentUser,
    (getCurrentUser: User) => {
     if (getCurrentUser) {
         return getCurrentUser;
      }
    }
     );
