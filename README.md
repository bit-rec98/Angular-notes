# AngularTestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Notas extra:

## Dry-run
- Dry-run: El dry-run consiste en la simulación de la ejecución de cierto código (o comando) junto con la devolución de lo que este código/comando haría, pero sin hacerlo. 
- Ejemplo: 
ng generate component card --dry--run devuelve por consola lo siguiente:

CREATE src/app/card/card.component.html (20 bytes)
CREATE src/app/card/card.component.spec.ts (605 bytes)  
CREATE src/app/card/card.component.ts (238 bytes)       
CREATE src/app/card/card.component.css (0 bytes)        

NOTE: The "--dry-run" option means no changes were made.

## Problemas de rendimiento
- Angular utiliza la directiva de control @defer para evitar problemas de rendimiento ya que utiliza la carga diferida para cargar elementos cuando no haya peticiones en ejecución
- Líneas de colores (roja/azul) en el waterfall del navegador:
  - Roja: Indica que la carga definitiva de la página (WindowLoad) ya se completó.
  - Azul: Indica que toda la data se descargó y se tiene listo el DOMContentLoad.
