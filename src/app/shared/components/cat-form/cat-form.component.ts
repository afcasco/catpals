import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ICat} from "../../../model/interfaces";

@Component({
  selector: 'app-cat-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './cat-form.component.html',
  styleUrl: './cat-form.component.scss'
})
export class CatFormComponent {

  @Input() buttonName!: string;

  @Input() cat?: ICat;

  @Output() outCat = new EventEmitter<ICat>();

  catForm!: FormGroup;

  constructor() {

    this.createForm();
    console.log(this.cat)

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


  outputCat() {
    console.log(this.catForm)

    if (this.catForm.valid) {
      this.outCat.emit({
        name: this.catForm.get('name')?.value,
        color: this.catForm.get('color')?.value,
        age: this.catForm.get('age')?.value,
        breed: this.catForm.get('breed')?.value,
        isIndoor: this.catForm.get('isIndoor')?.value,
        isVaccinated: this.catForm.get('isVaccinated')?.value,
        hasMicrochip: this.catForm.get('hasMicrochip')?.value,
      });


    } else {
      console.log('INVALID FORM')
    }
  }


}
