import { Component, OnInit } from "@angular/core";

import { PublicService } from "../../public.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  characters: any;
  continents: any;
  constructor(private publicService: PublicService) { }
  ngOnInit() {
    this.getCharacters();
    this.getContinents();
  }

  getCharacters() {
    this.publicService.getCharacters().subscribe(
      response => this.characters = response,
      error => console.log(error)
    )
  }

  getContinents() {
    this.publicService.getContinents().subscribe(
      {
        next: response => this.continents = response,
        error: error => this.characters = error

      }
    )
  }

}



// 1. añadir el PublicService al constructor
// 2. Crear variables que necesitemos
// 3. Crear metodos
// 4. anañadir metodos al ngOnInit