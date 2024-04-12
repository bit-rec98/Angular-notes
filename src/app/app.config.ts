import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/* En este archivo se agregarían los elementos que influenciarían a los componentes de manera similar a los contextos en react. Ejemplo: providers acá */
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
