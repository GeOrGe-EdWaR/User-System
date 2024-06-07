import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private _router: Router) {}
  userName: string | null = localStorage.getItem('username')
    ? localStorage.getItem('username')
    : 'no name';
  image: string | null = localStorage.getItem('image')
    ? localStorage.getItem('image')
    : '../../assets/pexels-photo-2379004 1.png ';
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('image');
    this._router.navigate(['/sign-in']);
  }
}
