import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../Interfaces/persona.interface';
import { PersonaService } from '../../Services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

@Injectable()
export class FormComponent {
  form: FormGroup;
  persona?: Persona;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      edad: [null, Validators.required],
    })
  }

  onSubmit(values: Persona) {
    this.personaService.addPersona(values).subscribe();
  }

  charge() {
    this.router.navigate(['/form/table']);
  }
}
