import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  credentials!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  ngOnInit(){
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async register(){
    this.authService.register(this.credentials.value)
      .then(()=>this.router.navigateByUrl('/private/home', {replaceUrl: true}))
      .catch(error => console.log(`Registration failed: ${error}`));
  }

  async login(){
    this.authService.login(this.credentials.value)
      .then(() => this.router.navigateByUrl('/private/home', {replaceUrl: true}))
      .catch(error => console.log(`Login failed: ${error}`));
  }
}
