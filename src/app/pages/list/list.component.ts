import {Component, Input} from '@angular/core';
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

  constructor(private router: Router,
              private catsService: CatsService) {
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
    this.router.navigate(['/private/edit', index])
      .then(() => console.log(`Editing cat with id = ${index}`))
  }

  removeCat(index: number) {
    this.catsService.removeCatByIndex(index);
    this.getCats();

  }

  getCats() {
    this.cats = this.catsService.getCats();
  }
}
