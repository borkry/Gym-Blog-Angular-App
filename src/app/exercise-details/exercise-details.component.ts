import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../types/exercise';
import { ExercisesService } from '../exercises.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../types/user';
import { UsersService } from '../users.service';

@Component({
selector: 'app-exercise-details',
standalone: true,
imports: [CommonModule],
templateUrl: './exercise-details.component.html',
styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {

exercise!: Exercise;
isAdministrator: boolean = false;

constructor(
    private route: ActivatedRoute,
    private exercisesService: ExercisesService,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    const exerciseId = Number(this.route.snapshot.paramMap.get('id'));
    this.exercisesService.getExerciseById(exerciseId).subscribe(exercise => {
      this.exercise = exercise;
    });
    this.isAdministrator = this.usersService.isAdministrator();
  }

  editExercise() {
    // Kod do nawigacji do formularza edycji ćwiczenia.
  }

  deleteExercise() {
    if (confirm('Czy na pewno chcesz usunąć to ćwiczenie?')) {
      const exerciseId = this.exercise?.id;
      if (exerciseId) {
        this.exercisesService.deleteExercise(exerciseId).subscribe(
          () => {
            this.router.navigate(['/exercises']);
          },
          (error) => {
            console.error('Wystąpił błąd podczas usuwania posta', error);
          }
        );
      }
    }
  }

}
