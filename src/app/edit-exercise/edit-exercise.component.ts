import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Exercise } from '../types/exercise';
import { ExercisesService } from '../exercises.service';
import { WhiteSpaceValidator } from '../white-space-validator';

@Component({
  selector: 'app-edit-exercise',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit-exercise.component.html',
  styleUrl: './edit-exercise.component.css'
})
export class EditExerciseComponent implements OnInit{
  form4edit: FormGroup;
  exercise!: Exercise;

  constructor(
    private exercisesService: ExercisesService, private router : Router, private route: ActivatedRoute 
  ) {
    this.form4edit = new FormGroup({
      name : new FormControl(),
      repeats : new FormControl(),
      rate : new FormControl(),
      RiR : new FormControl(),
      rest : new FormControl(),
    });
  }

  get name() {
    return this.form4edit.get('name');
  }

  get repeats() {
    return this.form4edit.get('repeats');
  }

  get rate() {
    return this.form4edit.get('rate');
  }

  get RiR() {
    return this.form4edit.get('RiR');
  }

  get rest() {
    return this.form4edit.get('rest');
  }

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.exercisesService.getExerciseById(postId).subscribe(exercise => {
      this.exercise = exercise;
    });
    this.form4edit.controls['name'].setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
      Validators.pattern("[A-ZĄĆĘŁŃÓŚŹŻ].*"),
    ]);

    this.form4edit.controls['repeats'].setValidators([
      Validators.required,
      Validators.min(1),
      Validators.max(20),
      Validators.maxLength(2),
      WhiteSpaceValidator
    ])

    this.form4edit.controls['rate'].setValidators([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
    ])

    this.form4edit.controls['RiR'].setValidators([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1),
      Validators.min(0),
      Validators.max(5),
      WhiteSpaceValidator
    ])

    this.form4edit.controls['rest'].setValidators([
      Validators.required,
      Validators.min(1),
      Validators.max(10),
      Validators.minLength(0),
      Validators.maxLength(2),
      WhiteSpaceValidator
    ])
  }

  onSubmit() {
    if (this.form4edit.valid) {
        this.exercise.name = this.form4edit.value.name,
        this.exercise.repeats = this.form4edit.value.repeats,
        this.exercise.rate = this.form4edit.value.rate,
        this.exercise.RiR = this.form4edit.value.RiR,
        this.exercise.rest = this.form4edit.value.rest
      }
      this.exercisesService.editExercise(this.exercise.id, this.exercise).subscribe(res =>{
        alert("Pomyślnie edytowano ćwiczenie!");
        this.form4edit.reset();
        this.router.navigate(['exercises', this.exercise.id]);
      }, err=>{
        alert("Edytowanie ćwiczenia nie powiodło się!");
      })
    this.form4edit.reset();
  }
}
