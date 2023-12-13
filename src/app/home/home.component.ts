import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    FormsModule
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
      // Przeliczenie wzrostu na metry
      const heightInMeters = this.height / 100;

      // Obliczanie BMI: waga (kg) / (wzrost (m) * wzrost (m))
      this.bmi = this.weight / (heightInMeters * heightInMeters);

      // Określenie kategorii BMI
      this.bmiCategory = this.getBmiCategory(this.bmi);
    }
    console.log("Gaming Console");
    console.log(this.weight);
    console.log(this.height);
  }

  getBmiCategory(bmi: number): string {
    if (bmi < 18.5) {
      return 'Niedowaga';
    } else if (bmi < 24.9) {
      return 'Prawidłowa waga';
    } else if (bmi < 29.9) {
      return 'Nadwaga';
    } else {
      return 'Otyłość';
    }
  }
}
