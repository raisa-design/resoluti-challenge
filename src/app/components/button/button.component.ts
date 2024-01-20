import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { ButtonVariant } from '../../types/ButtonVariant';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: false }) variant?: ButtonVariant = ButtonVariant.default;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();


  onChange(element: Event) {
    this.change.emit(element);
  }

}
