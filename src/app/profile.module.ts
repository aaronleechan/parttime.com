import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileWorkerComponent } from './profile-worker/profile-worker.component';

const routes: Routes=[
  { path: 'profile-user',component: ProfileUserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileUserComponent, ProfileWorkerComponent]
})
export class ProfileModule { }
