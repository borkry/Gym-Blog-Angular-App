import { Injectable } from '@angular/core';
import { Exercise } from './types/exercise';

@Injectable() 
export class ExercisesService {
    exercises : Exercise[] = [];

    constructor() {
        this.exercises[0] = new Exercise(1, "Cwiczenie przykładowe", 12, "szybko", 2, "minuta");
        this.exercises[1] = new Exercise(2, "Cwiczenie przykładowe", 12, "szybko", 2, "minuta");
        this.exercises[2] = new Exercise(3, "Cwiczenie przykładowe", 12, "szybko", 2, "minuta");
        this.exercises[3] = new Exercise(4, "Cwiczenie przykładowe", 12, "szybko", 2, "minuta");
        this.exercises[4] = new Exercise(5, "Cwiczenie przykładowe", 12, "szybko", 2, "minuta");
        this.exercises[5] = new Exercise(6, "Tytuł testowy", 12, "szybko", 2, "minuta");
    }

    getExercises() : Exercise[] {
        return this.exercises;
    }

    getPost(index : number) : Exercise {
        return this.exercises[index];
    }

    getNumberOfExercises() : number {
        return this.exercises.length;
    }

    addExercise(newExercise : Exercise) {
        this.exercises.push(newExercise);
    } 
}