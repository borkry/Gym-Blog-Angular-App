import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './types/post';

@Pipe({
  name: 'searchPost',
  standalone: true
})
export class SearchPostPipe implements PipeTransform {

  transform(posts: Post[], ...args: string[]): Post[] {
    let searchBy = args[0];
    let criteria = args[1];
    if (criteria==undefined) {
      criteria = 'title';
    }
    searchBy = searchBy.toLowerCase();
    if (!searchBy) {
      return posts;
    }
    const filteredList = posts.filter(el => {
      if (criteria == 'title') {
        if (el.title.toLowerCase().includes(searchBy)) {
          return el;
        }
      }
      return null;
    });
    return filteredList;
  }

}
