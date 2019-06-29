import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'main/list', component: ListComponent },
  { path: 'main/form', component: FormComponent },
  { path: 'sample', loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule), },
  { path: 'ngrx', loadChildren: () => import('./ngrx/ngrx.module').then(m => m.NgrxModule), },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
