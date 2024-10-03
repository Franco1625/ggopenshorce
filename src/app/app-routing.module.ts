import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {MentalStateExamsComponent} from './nursing/components/mental-state-exams/mental-state-exams.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'nursing/mental-state-exams', component: MentalStateExamsComponent},
  {path: '**' , redirectTo: '/page-not-found'} // no olvidar crear el componente si es que piden
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
