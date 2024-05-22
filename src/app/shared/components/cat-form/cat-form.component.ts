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
  styleUrls: ['./cat-form.component.scss']
})
export class CatFormComponent {

  @Input() buttonName!: string;

  private _cat: ICat | undefined;

  @Input()
  set cat(c: ICat) {
    this._cat = c;
    console.log('cat', this._cat)
    this.updateForm(c);
  }

  get cat(): ICat | undefined {
    return this._cat;
  }

  @Output() outCat = new EventEmitter<ICat>();
  catForm: FormGroup;


  constructor() {
    this.catForm = this.createForm();
  }

  createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      color: new FormControl(''),
      age: new FormControl(0),
      breed: new FormControl(''),
      isIndoor: new FormControl(false),
      isVaccinated: new FormControl(false),
      hasMicrochip: new FormControl(false),
    });
  }

  updateForm(cat: ICat) {

    this.catForm.patchValue(cat)
  }



  outputCat(): void {
    console.log(this.catForm);

    if (this.catForm.valid) {
      this.outCat.emit({
        name: this.catForm.get('name')?.value ?? '',
        color: this.catForm.get('color')?.value ?? '',
        age: this.catForm.get('age')?.value ?? 0,
        breed: this.catForm.get('breed')?.value ?? '',
        isIndoor: this.catForm.get('isIndoor')?.value ?? false,
        isVaccinated: this.catForm.get('isVaccinated')?.value ?? false,
        hasMicrochip: this.catForm.get('hasMicrochip')?.value ?? false,
      });
    } else {
      console.log('INVALID FORM');
    }
  }
}
