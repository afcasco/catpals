import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ICat} from "../../model/interfaces";
import {CatsService} from "../../services/cats.service";
import {CatFormComponent} from "../../shared/components/cat-form/cat-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    NavbarComponent,
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    CatFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  catsService = inject(CatsService);
  cats: ICat[] = [];
  title;
  buttonName = 'Save';

  constructor(private router: Router) {
    this.title = "Home Title";
  }

  ngOnInit(): void {
    this.getCats();
  }

  getCats() {
    this.cats = this.catsService.getCats();
  }

  saveCat(cat: ICat) {
    this.catsService.setCats(cat);
    this.getCats();
  }

  goToEdit(cat: ICat) {
    console.log(cat)
    this.router.navigate(['/edit', cat.id])
      .then(r => console.log(`Editing cat with id = ${cat.id}`))
  }

}
