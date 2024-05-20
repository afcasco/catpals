import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    NavbarComponent,
    NavbarComponent
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  title: string = "About us Title";
}
