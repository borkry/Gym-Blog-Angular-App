import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExercisesService } from '../exercises.service';
import { Exercise } from '../types/exercise';
import { AddPostComponent } from '../add-post/add-post.component';
import { LoginComponent } from '../login/login.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { AboutComponent } from '../about/about.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PostExercise } from './post-exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-exercise',
  standalone: true,
  providers: [ExercisesService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AddPostComponent,
    AboutComponent, LoginComponent, PostsListComponent, RouterLink],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.css'
})
export class AddExerciseComponent implements OnInit {
  form4create: FormGroup;

  constructor(
    private exercisesService: ExercisesService, private router : Router
  ) {
    this.form4create = new FormGroup({
      name : new FormControl(),
      repeats : new FormControl(),
      rate : new FormControl(),
      RiR : new FormControl(),
      rest : new FormControl(),
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

  get rest() {
    return this.form4create.get('rest');
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

    this.form4create.controls['rest'].setValidators([
      Validators.required,
      Validators.min(1),
      Validators.max(50),
      Validators.minLength(0),
      Validators.maxLength(2),
    ])
  }

  onSubmit() {
    if (this.form4create.valid) {
      let newExercise : PostExercise = {
        name : this.form4create.value.name,
        repeats : this.form4create.value.repeats,
        rate : this.form4create.value.rate,
        RiR : this.form4create.value.RiR,
        rest : this.form4create.value.rest
      }
      this.exercisesService.createExercise(newExercise).subscribe(res =>{
        alert("Pomyślnie dodano ćwiczenie!");
        this.form4create.reset();
        this.router.navigate(['exercises']);
      }, err=>{
        alert("Dodawanie ćwiczenia nie powiodło się!");
      })
    this.form4create.reset();
    }
  }
}
