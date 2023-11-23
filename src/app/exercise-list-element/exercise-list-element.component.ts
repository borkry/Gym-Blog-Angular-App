import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../types/exercise';

@Component({
  selector: 'app-exercise-list-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-list-element.component.html',
  styleUrl: './exercise-list-element.component.css'
})
export class ExerciseListElementComponent {
  @Input() exercise!: Exercise;
}
