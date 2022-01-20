import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import {ListComponent} from './pages/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: ListComponent },
  { path: ':id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
