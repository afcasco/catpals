import {Component, Input} from '@angular/core';
import {ICat} from "../../model/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {


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
}
