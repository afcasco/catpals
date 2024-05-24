import {Component, inject, Input} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {

  authService = inject(AuthService);
  @Input() title?: string;

  constructor(private router: Router) {


  }


  logout() {
    this.authService.logout().then(()=> {
      this.router.navigate(['login'])
        .then(()=> console.log('logged out successfully'))
    });
  }
}
