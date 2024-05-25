import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-teste',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-teste.component.html',
  styleUrl: './form-teste.component.scss'
})

export class FormTesteComponent { 
  form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('')
    });
  }

  onSubmit(){
    console.log(this.form.value);
  }
}
