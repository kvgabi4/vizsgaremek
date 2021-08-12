import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: string = localStorage.getItem('currentUser') || '';
  currentUser$: Observable<User> = this.userService.getAll().pipe(
    switchMap(users => users.filter(user => user.email === JSON.parse(this.user).email))
  );

  clicked: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    }
  onUpdate(form: NgForm, user: User): void {
    this.clicked = true;
    if (!user._id) {
      this.userService.create(user);
      this.router.navigate(['users']);
      } else {
        this.userService.update(user).subscribe(
          () => this.router.navigate(['users'])
        );
      }
      //console.log('onUpdate:',form.value, user)
  }
}
