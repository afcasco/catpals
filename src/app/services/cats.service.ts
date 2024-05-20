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
    this.setId(cat)
    cats.push(cat);
    window.localStorage.setItem('cats', JSON.stringify(cats));
  }

  getCatById(id: number) {
    const cats = this.getCats();
    return cats.find(cat => cat.id === id);
  }


  setId(cat: ICat) {
    const cats = this.getCats();

    if( cats.length > 0 ) {
      cat.id = cats.sort((a, b) => {
        return a.id! - b.id!
      })[cats.length - 1].id! + 1;
    }
    else {
      cat.id = 0;
    }

  }
}
