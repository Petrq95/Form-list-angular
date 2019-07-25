import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { postReducer } from './state/post.reducer';
import { UserEffect } from './state/user.effect';
import { PostEffect } from './state/post.effect';

import { NgrxComponent } from './users/ngrx.component';
import { UserComponent } from './user/user.component';
import { MaterialModule } from '../material/material.module';
import { PostComponent } from './post/post.component';
import { UserInfoComponent } from './user-info/user-info.component';




const routes: Routes = [
  { path: '', redirectTo: '/ngrx', pathMatch: 'full' },
  { path: 'ngrx', component: NgrxComponent },
  { path: '', component: UserComponent },
  { path: '', component: PostComponent},
  { path: 'info/:name', component: UserInfoComponent },


];
@NgModule({
  declarations: [UserComponent, NgrxComponent, PostComponent, UserInfoComponent, ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffect]),
    StoreModule.forFeature('posts', postReducer),
    EffectsModule.forFeature([PostEffect]),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class NgrxModule { }
