import { Injectable } from '@angular/core';
import { Exercise } from './types/exercise';
import { HttpClient } from '@angular/common/http';
import { PostExercise } from './add-exercise/post-exercise';

@Injectable({
    providedIn: 'root'
}) 
export class ExercisesService {
    url = 'http://localhost:3000/exercises';

    constructor(private http : HttpClient) { }

    getAllExercises() {
        return this.http.get<Exercise[]>(this.url);
    }

    getExerciseById(id : number) {
        return this.http.get<Exercise>(`${this.url}/${id}`)
    }

    createExercise(exercise : PostExercise) {
        return this.http.post<Exercise>(this.url, exercise);
    }

    deleteExercise(id : number) {
        return this.http.delete<Exercise>(`${this.url}/${id}`);
    }
}