import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormTesteComponent } from './form-teste/form-teste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormTesteComponent],
  template: '<app-form-teste></app-form-teste>'
  //templateUrl: './app.component.html',
 // styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formulario-teste';
}
