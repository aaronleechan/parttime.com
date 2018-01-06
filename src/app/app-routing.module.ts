import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileModule} from "./profile.module";

const routes: Routes = [
  { path: 'profile', loadChildren: './profile.module#ProfileModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
