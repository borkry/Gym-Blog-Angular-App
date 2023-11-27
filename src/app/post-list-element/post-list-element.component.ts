import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../types/post';
import { dateFormatDirective } from '../date-format.directive';

@Component({
  selector: 'app-post-list-element',
  standalone: true,
  imports: [CommonModule, dateFormatDirective],
  templateUrl: './post-list-element.component.html',
  styleUrl: './post-list-element.component.css' 
})
export class PostListElementComponent {
  @Input() post!: Post;
}
