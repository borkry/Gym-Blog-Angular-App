import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    FormsModule, CommonModule
  ],
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  weight: number = 0;
  height: number = 0;
  bmi: number = 0;
  bmiCategory: string = '';

  calculateBMI() {
    if (this.height > 0 && this.weight > 0) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);
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
}
