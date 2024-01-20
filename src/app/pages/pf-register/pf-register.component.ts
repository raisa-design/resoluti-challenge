import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { DividerComponent } from '../../components/divider/divider.component';

@Component({
  selector: 'app-pf-register',
  standalone: true,
  imports: [InputComponent, DividerComponent],
  templateUrl: './pf-register.component.html',
  styleUrl: './pf-register.component.css'
})
export class PfRegisterComponent {

}
