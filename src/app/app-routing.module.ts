import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './auth.guard';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'users-list', component: UserListComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'add', component: AddEditUserComponent },
      { path: 'edit/:id', component: AddEditUserComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
