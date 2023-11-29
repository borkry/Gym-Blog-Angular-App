import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './types/post';
import { PostsService } from './posts.service';

@Pipe({
  name: 'sortByDate',
  standalone: true
})
export class SortByDatePipe implements PipeTransform {
  constructor(private postsService : PostsService){}
  posts : any =  this.postsService.getAllPosts().subscribe(data => this.posts = data);
  transform(posts: Post[], ...args: Date[]): Post[] {
    posts.sort((a, b) => {
      const dateA = new Date(a.create_date);
      const dateB = new Date(b.create_date);
      return dateB.getTime() - dateA.getTime();
    });
    return posts;
  }
}
