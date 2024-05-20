import {Component, inject, Inject, Injectable, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
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

  cats: ICat[] = [];
  title;
  catForm!: FormGroup;
  catsService = inject(CatsService);

  constructor() {
    this.title = "Home Title";
  }

  ngOnInit(): void {
    this.getCats();
    this.createForm();
  }

  createForm() {
    this.catForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      color: new FormControl(''),
      age: new FormControl(0),
      breed: new FormControl(''),
      isIndoor: new FormControl(false),
      isVaccinated: new FormControl(false),
      hasMicrochip: new FormControl(false),
    });
  }

  getCats() {
    this.cats = this.catsService.getCats();
  }

  saveCat() {
    console.log(this.catForm)

    if(this.catForm.valid) {
      const cat: ICat = {
        name: this.catForm.get('name')?.value,
        color: this.catForm.get('color')?.value,
        age: this.catForm.get('age')?.value,
        breed: this.catForm.get('breed')?.value,
        isIndoor: this.catForm.get('isIndoor')?.value,
        isVaccinated: this.catForm.get('isVaccinated')?.value,
        hasMicrochip: this.catForm.get('hasMicrochip')?.value,
      }

      this.catsService.setCats(cat);
      this.getCats();
    } else {
      console.log('INVALID FORM')
    }


  }
}
