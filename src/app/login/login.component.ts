import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'rajaofera';
  password = '';
  errorMessage = 'Invalid Credential';

  invalidLogin = false;

  //Router
  //Dependency Injection
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      //If the authentication of username and passwor are true: redirect to Welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
