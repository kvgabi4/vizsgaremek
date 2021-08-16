import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { ToasterService } from 'src/app/service/toaster.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  columns: ITableColumn[] = this.config.userColumns;
  list$: Observable<User[]> = this.userService.getAll();
  entity: string[] = ['user', 'Felhasználók'];
  filterKeys: string[][] = this.config.userColumns.map(item => [item.key, item.title]);
  filterKey: string[] = this.filterKeys[1];
  color: string[] = ['bg-secondary', 'btn-outline-secondary'];

  constructor(
    private config: ConfigService,
    private userService: UserService,
    private router: Router,
    private toastr: ToasterService
  ) {}

  ngOnInit(): void {
  }

  onSelectOne(user: User): void {
    this.router.navigate(['/', 'user', user._id])
  }

  onDeleteOne(user: User): void {
    if (window.confirm('Biztosan törli ezt a felhasználót?')) {
      this.userService.remove(user._id).subscribe(
        () => this.list$ = this.userService.getAll()
      )
      this.toastr.showSuccessWithTimeout(`
        <table class="table">
          <thead>
            <tr>
              <th>Felhasználó azonosítója</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${user._id}</td>
            </tr>
          </tbody>
        </table>
        </span>`,
        "A felhasználó sikeresen törlődött:",
        5000)
  }
  }

}
