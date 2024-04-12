import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; /* Decorador para describir cómo es el componente */
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';

/* Un decorador es una sintaxis/patrón que en este caso influye a la clase AppComponent */
@Component({
  selector: 'app-root',
  standalone:
    true /* Si se quiere usar cualquier módulo/componente, se tiene que añadir en los imports */,

  imports: [
    CommonModule,
    RouterOutlet,
    UserComponent,
    CommentsComponent
  ], //* Acá se tiene que añadir el nombre de la clase que se exporta en otro componente para poder utilizarlo en cualquiera de los templates,

  //* templateUrl: './app.component.html', -> Componente externo
  templateUrl: './app.component.html',

  /* En los templates de un componente, se pueden utilizar las propiedades de una clase mediante su evaluación y el uso de llaves */
  /* template: `
    <h1>Hello Angular from {{ciudad}}, I can evaluate the sum of 2 + 2 = {{2+2}}</h1> <!-- Componente inline -->

    <!-- Ambos tipos de etiquetado funcionan -->
    <app-user></app-user>
    <app-user/>
  `, */

  /* Pueden ser definidos de manera inline o en un archivo externo ("style" para estilos inline)*/
  styleUrl: './app.component.css',
  /*
  Ejemplo estilos inline:
  styles: `
    h1{
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: crimson;
    }
  ` */

// --------------------------------------------------------
//* Las propiedades son definidas por clases de TS para darle lógica y comportamiento a los componentes
})
export class AppComponent {
  ciudad = 'Córdoba'; /* Se utiliza inferencia de TS */
}

//* Este es el componente raíz de la aplicación
