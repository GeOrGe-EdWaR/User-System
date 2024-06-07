import { Users } from './../users';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  PageId: number = 0;
  userInfo: Users = {
    firstName: '',
    lastName: '',
    email: '',
    phone: 1203456789,
    age: 0,
    birthDate: '',
    id: 0,
  };

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _usersService: UsersService
  ) {
    this.PageId = _ActivatedRoute.snapshot.params['id'];
    this.GetCurrentUser();
  }
  UserForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('null'),
    email: new FormControl(''),
    Age: new FormControl(0),
    phone: new FormControl(0),
    birthDate: new FormControl(''),
  });

  GetCurrentUser() {
    this._usersService.GetCurrentUser(this.PageId).subscribe({
      next: (res) => {
        console.log(res);
        this.userInfo = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.UserForm.patchValue({
          firstName: this.userInfo?.firstName,
          lastName: this.userInfo?.lastName,
          email: this.userInfo?.email,
          phone: this.userInfo?.phone,
          Age: this.userInfo?.age,
          birthDate: this.userInfo?.birthDate,
        });
      },
    });
  }
}
