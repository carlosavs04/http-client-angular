import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../Services/persona.service';
import { Persona } from '../../Interfaces/persona.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  personas?: Persona[];
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.getPersonas(); 
  }

  getPersonas() {
    this.personaService.getPersonas()
    .subscribe(personas => this.personas = personas)
  }
}
