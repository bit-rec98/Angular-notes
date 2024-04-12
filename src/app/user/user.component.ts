import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

/*
Este componente es nuevo y se ha generado con el siguiente comando:
* ng generate component component-name
*/

@Component({
  selector: 'app-user', //* Para poder comunicar componentes entre sí, es necesario conocer el tipo de selector de un componente
  standalone: true,
  imports: [CommonModule, GamesComponent], //*Para conectar otros componentes con este componente, se deben importar acá y luego se coloca su selector HTML en el archivo .html de este componente, en este caso user.component.html
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //* Al importar un componente, se tiene que tener en cuenta el nombre de la clase que se está exportando en el archivo que recibe este componente
  username = 'Cristian';
  isLoggedIn = false; //*Funciona como un state que se cambia con eventos
  favGame = ''; //* Acá se guarda la información que se emite desde el componente hijo (games.component.ts)

  getFavGame(gameName: string){
    this.favGame = gameName; //* Este método permite recuperar y guardar la información que se recibe luego de ser ejecutado - en su ejecución se debe colocar como parámetro $event y en la declaración se debe agregar la información que se espera recibir
  }

  //* Se activa al hacer click en la imagen del componente .html
  greet(){
    alert(`¡Hola ${this.username}!`)
  }


}
