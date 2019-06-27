import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MaterialModule } from '../material/material.module';


const routes: Routes = [
  {path: '/sample', component: SampleComponent},
  { path: '', component: ParentComponent },
  {path: '', component: ChildComponent }

];
@NgModule({
  declarations: [SampleComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class SampleModule { }
