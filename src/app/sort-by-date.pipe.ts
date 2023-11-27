import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './types/post';

@Pipe({
  name: 'sortByDate',
  standalone: true
})
export class SortByDatePipe implements PipeTransform {

  transform(posts: Post[], ...args: Date[]): Post[] {
    posts.sort((a, b) => {
      return b.create_date.getTime() - a.create_date.getTime();
    });
    return posts;
  }
}
