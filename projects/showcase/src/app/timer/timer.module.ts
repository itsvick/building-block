import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { AwesomeTimeModule } from 'collection-editor/awesome-time';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: TimerComponent
  }
];

@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    AwesomeTimeModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TimerModule { }
