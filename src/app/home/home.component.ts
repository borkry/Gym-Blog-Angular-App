import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    FormsModule, CommonModule, ReactiveFormsModule
  ],
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  bmi: number = 0;
  bmiCategory: string = '';
  form4bmi: FormGroup;

  constructor(
    
  ) {
    this.form4bmi = new FormGroup({
      weight : new FormControl(),
      height : new FormControl()
    });

  }

  ngOnInit() {
    this.form4bmi.controls['weight'].setValidators([
      Validators.required,
      Validators.min(1),
      Validators.max(300),
      Validators.pattern('^[0-9]*$')
    ]);
    this.form4bmi.controls['height'].setValidators([
      Validators.required,
      Validators.min(1),
      Validators.max(250),
      Validators.pattern('^[0-9]*$')
    ]);
  }

  get weight() {
    return this.form4bmi.get('weight');
  }

  get height() {
    return this.form4bmi.get('height');
  }

  onSubmit() {
    if (this.form4bmi.valid) {
      this.calculateBMI(this.form4bmi.value.height, this.form4bmi.value.weight);
  }
}
  calculateBMI(height : number, weight: number) {
    const heightInMeters = height / 100;
    this.bmi = weight / (heightInMeters * heightInMeters);
    if (this.bmi < 18.5) {
      this.bmiCategory = 'Niedowaga';
    } else if (this.bmi < 24.9) {
      this.bmiCategory = 'Prawidłowa waga';
    } else if (this.bmi < 29.9) {
      this.bmiCategory = 'Nadwaga';
    } else {
      this.bmiCategory = 'Otyłość';
    }
  }
}

