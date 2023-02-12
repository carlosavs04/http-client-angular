import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { User } from 'src/app/Interfaces/user.interface';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup
  user?: User

  constructor(
    private _loginService: LoginService,
    private fb : FormBuilder,
    private router: Router
    ) {
      this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
    }

  logIn(values : User){
    this._loginService.logIn(values)
    this.router.navigate(['/form'])
  }
}
