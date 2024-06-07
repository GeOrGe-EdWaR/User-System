import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private AuthService: AuthService, private _router: Router) {}
  ErrorMessage: string = '';
  isHide: boolean = true;
  signinform = new FormGroup({
    username: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
      Validators.maxLength(20),
    ]),
    password: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
      Validators.maxLength(20),
    ]),
  });
  // login function
  login(data: FormGroup) {
    console.log(data);
    this.AuthService.onsignin(data.value).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', ` ${res.firstName} ${res.lastName}`);
        localStorage.setItem('image', res.image);
      },
      error: (err) => {
        console.log(err.error.message);
        this.ErrorMessage = err.error.message;
      },
      complete: () => {
        console.log('ok');
        this._router.navigate(['/home']);
      },
    });
  }
  // form reset
  clear() {
    this.signinform.reset();
  }
}
