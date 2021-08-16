import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params._id) {
        return this.userService.get(params._id)
      }
      return of(new User())
    })
  );

  clicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, user: User): void {
    this.clicked = true;
    if (user._id === '') {
      this.userService.create(form.value).subscribe(
        () => this.router.navigate(['users']),
        err => console.error(err)
      );
    } else {
      this.userService.update(user).subscribe(
        () => this.router.navigate(['users']),
        err => console.error(err)
      );
    }
  }
}
