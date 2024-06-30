import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ListItem = {
  text: string;
  value: string;
}
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() items!: ListItem[];
  @Input({ required: false }) value: string | undefined = undefined;
  @Input({ required: false }) noItemsText: string | undefined = undefined;
  @Output() select = new EventEmitter<string>();
}
