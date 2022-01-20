import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { EditComponent } from './pages/edit/edit.component';
import {ListComponent} from './pages/list/list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class HeroesModule { }
