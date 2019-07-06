import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';

import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { UserEffect } from './state/user.effect';

import { UserComponent } from './user/user.component';
import { NgrxComponent } from './users/ngrx.component';
import { MaterialModule } from '../material/material.module';
import { PostComponent } from './post/post.component';
import { UserInfoComponent } from './user-info/user-info.component';



const routesFeature: Routes = [
  { path: '/users', component: NgrxComponent },
  { path: '', component: UserComponent }

];
@NgModule({
  declarations: [UserComponent, NgrxComponent, PostComponent, UserInfoComponent, ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesFeature),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffect]),
    MaterialModule,
  ]
})
export class NgrxModule { }
