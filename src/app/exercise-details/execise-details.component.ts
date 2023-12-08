import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../types/exercise';
import { ExercisesService } from '../exercises.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-execise-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './execise-details.component.html',
  styleUrl: './execise-details.component.css'
})
export class ExerciseDetailsComponent implements OnInit{
  
  exercise : Exercise | undefined;

  constructor(private route : ActivatedRoute, private exercisesService : ExercisesService, private router : Router) {}

  ngOnInit() : void {
    const exerciseId = Number(this.route.snapshot.paramMap.get('id'));
    this.exercisesService.getExerciseById(exerciseId).subscribe(exercise => {
      this.exercise = exercise;
    })
  }

}
