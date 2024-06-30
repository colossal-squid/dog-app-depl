import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ required: false }) loading: boolean = false;
  @Input({ required: false }) disabled: boolean = false;
  @Output() click = new EventEmitter<void>();
}
