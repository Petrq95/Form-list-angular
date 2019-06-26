import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {path: '', component: SampleComponent }
];
@NgModule({
  declarations: [SampleComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SampleModule { }
