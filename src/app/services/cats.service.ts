import {Injectable} from '@angular/core';
import {ICat} from "../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor() {
  }

  getCats(): ICat[] {
    const storedCats = window.localStorage.getItem('cats');

    if (storedCats) {
      try {
        return JSON.parse(storedCats!);
      } catch (error) {
        return []
      }
    }

    return [];
  }

  setCats(cat: ICat) {
    const cats = this.getCats();
    cats.push(cat);
    window.localStorage.setItem('cats', JSON.stringify(cats));
  }



  getCatByIndex(index: number): ICat {
    return this.getCats()[index];
  }




  editCat(index: number, cat: ICat) {
    const cats = this.getCats();
    cats[index] = cat;
    this.saveCats(cats);
  }

  private saveCats(cats: ICat[]){
    window.localStorage.setItem('cats',JSON.stringify(cats));
  }
}
