import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { UserPostComponent } from './user-post/user-post.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { MaterialModule } from '../material/material.module';

const routesFeature: Routes = [
  { path: '/ngrx', component: NgrxComponent },
  { path: '', component: UserPostComponent }

];
@NgModule({
  declarations: [UserPostComponent, NgrxComponent, ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesFeature),
    MaterialModule,
  ]
})
export class NgrxModule { }
