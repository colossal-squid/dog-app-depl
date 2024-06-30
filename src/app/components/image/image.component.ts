import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
})
export class ImageComponent {
  @Input({ required: false }) loading: boolean = false;
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
}
