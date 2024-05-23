import {Component, inject, Input} from '@angular/core';
import {ICat} from "../../model/interfaces";
import {Router} from "@angular/router";
import {CatsService} from "../../services/cats.service";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  catsService = inject(CatsService);


  constructor(private router: Router) {
  }

  private _cats: ICat[] | undefined;

  @Input()
  set cats(c: ICat[]) {
    this._cats = c;
    console.log('cat', this._cats)
  }

  get cats(): ICat[] | undefined {
    return this._cats;
  }


  goToEdit(index: number) {
    this.router.navigate(['/edit', index])
      .then(r => console.log(`Editing cat with id = ${index}`))
  }

  removeCat(index: number) {
    this.catsService.removeCatByIndex(index);
    this.getCats();

  }

  getCats() {
    this.cats = this.catsService.getCats();
  }
}
