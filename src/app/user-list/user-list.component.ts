import { Users } from './../users';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  UsersList: Users[] = [];
  searchKey: string = '';
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 30;
  constructor(
    private _userService: UsersService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this._userService.OnGetUsers().subscribe({
      next: (res) => {
        this.UsersList = res.users;
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

  get paginatedItems():any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.UsersList.slice(startIndex, endIndex);
  }

  get TotalPages() {
    this.totalItems = this.UsersList.length;
    return Math.ceil(this.UsersList.length / this.itemsPerPage);
  }
  nextPage() {
    this.totalItems += 10;
    this.getAllUsers();
  }
  prevPage() {
    this.totalItems -= 10;
    this.getAllUsers();
  }
  pageChanged(page: number): void {
    this.currentPage = page;
  }
}
