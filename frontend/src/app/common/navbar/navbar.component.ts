import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$: BehaviorSubject<User | null> = this.auth.currentUserSubject$;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.auth.logout();
  }

}
