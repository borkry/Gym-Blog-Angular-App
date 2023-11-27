import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from './types/exercise';

@Pipe({
  name: 'searchExercise',
  standalone: true
})
export class SearchExercisePipe implements PipeTransform {

  transform(exercises: Exercise[], ...args: string[]): Exercise[] {
    let searchBy = args[0];
    let criteria = args[1];
    if (criteria==undefined) {
      criteria = 'title';
    }
    searchBy = searchBy.toLowerCase();
    if (!searchBy) {
      return exercises;
    }
    const filteredList = exercises.filter(el => {
      if (criteria == 'title') {
        if (el.name.toLowerCase().includes(searchBy)) {
          return el;
        }
      }
      return null;
    });
    return filteredList;
  }

}
