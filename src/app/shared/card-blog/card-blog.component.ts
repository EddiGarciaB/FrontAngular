import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-blog.component.html',
  styleUrl: './card-blog.component.sass'
})
export class CardBlogComponent {
  items = [1, 2, 3];
}
