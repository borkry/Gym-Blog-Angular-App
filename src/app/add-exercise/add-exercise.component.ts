import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExercisesService } from '../exercises.service';
import { Exercise } from '../types/exercise';

@Component({
  selector: 'app-add-exercise',
  standalone: true,
  providers: [ExercisesService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.css'
})
export class AddExerciseComponent implements OnInit {
  @Output() exerciseAdded = new EventEmitter<Exercise>();
  form4create: FormGroup;

  constructor(
    private exercisesService: ExercisesService
  ) {
    this.form4create = new FormGroup({
      name : new FormControl(),
      repeats : new FormControl(),
      rate : new FormControl(),
      RiR : new FormControl(),
      interruption : new FormControl(),
    });
  }

  get name() {
    return this.form4create.get('name');
  }

  get repeats() {
    return this.form4create.get('repeats');
  }

  get rate() {
    return this.form4create.get('rate');
  }

  get RiR() {
    return this.form4create.get('RiR');
  }

  get interruption() {
    return this.form4create.get('interruption');
  }

  ngOnInit() {
    this.form4create.controls['name'].setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
      Validators.pattern("[A-Z].*"),
    ]);

    this.form4create.controls['repeats'].setValidators([
      Validators.required,
      Validators.min(1),
      Validators.maxLength(2),
    ])

    this.form4create.controls['rate'].setValidators([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
    ])

    this.form4create.controls['RiR'].setValidators([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1),
      Validators.min(0),
      Validators.max(5),
    ])

    this.form4create.controls['interruption'].setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ])
  }

  onSubmit() {  
    if (this.form4create.valid) {
      let newExercise = new Exercise(
        this.exercisesService.getNumberOfExercises() + 1,
        this.form4create.value.name,
        this.form4create.value.repeats,
        this.form4create.value.rate,
        this.form4create.value.RiR,
        this.form4create.value.interruption
      );
    this.exercisesService.addExercise(newExercise);
    this.exerciseAdded.emit(newExercise);
    this.form4create.reset();
    }
  }
}
