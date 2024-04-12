import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Biblioteca de {{ username }}</h3>
    <ul>
      <!--
        Forma antigüa:
        <li *ngFor="let game of games">
          <a href="{{game.id}}">{{game.name}}</a>
        </li>
       -->
      <!-- Nueva forma con directiva @for - desde V.17 -->
      <!-- track keyword determina el seguimiento a un identificador único para evitar errores (similar a keys en react)  -->
      @for(game of games; track game.id){
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = ''; //* Decorador que permite que este componente reciba datos como propiedades para poder manipularlo - comunicación desde componente padre a componente hijo

  @Output() addFavEvent = new EventEmitter<string>();
  /*
  * - @Output: Decorador que permite que este componente envíe datos para poder manipularlos - comunicación desde componente hijo a componente padre
  * - EventEmitter recibe un tipo de dato (string en este caso) que va a enviarle al componente padre
  */

  /* Método que ejecuta el decorador @Output */
  fav(gameName: string) {
    // alert(`${this.username} posee ${gameName}`)

    this.addFavEvent.emit(gameName); //* Se emite (envía) el evento que se genera junto con la información que se quiere enviar (con el nombre del elemento actual en este caso)
  }

  games = [
    {
      id: 1,
      name: 'Battlefield 4',
    },
    {
      id: 2,
      name: 'Fallout 4',
    },
    {
      id: 3,
      name: 'Skyrim',
    },
    {
      id: 4,
      name: 'Project Zomboid',
    },
  ];
}
