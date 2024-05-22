import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatsService} from "../../services/cats.service";
import {ICat} from "../../model/interfaces";
import {CatFormComponent} from "../../shared/components/cat-form/cat-form.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CatFormComponent,
    HeaderComponent,
    NavbarComponent
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{

  catsService = inject(CatsService);
  cat!: ICat;
  title = 'Cat Editor ';
  buttonName: string = 'Update';
  index!: number;



  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.index = params['id'];
      this.cat = this.catsService.getCatByIndex(params['id'])!;
    })
  }

  editCat(cat: ICat) {
    this.catsService.editCat(this.index, cat);
    this.router.navigate(['/home']).then(r => console.log("back to home"));
  }


}
