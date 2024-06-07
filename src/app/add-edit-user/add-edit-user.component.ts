import { Users } from './../users';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent implements OnInit {
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
    private _usersService: UsersService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.PageId = _activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    if (this.PageId > 0) {
      this.GetUserById(this.PageId);
    }
  }
  //form group
  AddUserForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    lastName: new FormControl('null', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    Age: new FormControl(0, [Validators.min(18), Validators.max(60)]),

    phone: new FormControl(0, [
      Validators.required,
      Validators.pattern('^01[0125][0-9]{8}$'),
    ]),
    birthDate: new FormControl('', Validators.required),
  });

  // getUserBYiD function
  GetUserById(id: number) {
    this._usersService.GetUserById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.userInfo = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.AddUserForm.patchValue({
          firstName: this.userInfo?.firstName,
          lastName: this.userInfo?.lastName,
          email: this.userInfo?.email,
          phone: this.userInfo?.phone,
          Age: this.userInfo?.age,
          birthDate: this.userInfo?.birthDate,
        });
        console.log('completed');
      },
    });
  }

  //  submit function

  onSubmit(data: FormGroup) {
    if (this.PageId) {
      this._usersService.onUpdateUser(data.value, this.PageId).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('completed');
        },
      });
    } else {
      //update user
      this._usersService.onUpdateUser(data.value, this.PageId).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('completed');
        },
      });
    }
  }
}
