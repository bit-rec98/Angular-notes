import { Component } from '@angular/core';

/* Este código TS se carga de forma diferida porque el selector de este componente se está cargando de forma diferida con @defer */

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h1>Comentarios sobre Angular</h1>
    <img
      src="https://imgs.search.brave.com/4Pmz6ihxSeTg1YsFv4p7-ehxpyjs0252n0fbbJ6g_lY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9zdGluZ2VyLmVz/L3R1dG9yaWFsZXMv/d3AtY29udGVudC91/cGxvYWRzL3NpdGVz/LzcvMjAyMC8wOS9h/bmd1bGFyLWhvbWVw/YWdlLmpwZw"
      alt="angular"
    />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt neque velit iusto soluta, assumenda corrupti quae culpa perspiciatis labore aliquid deserunt eos, fugiat reiciendis dolores id dolorem sint. Unde.
    </p>
  `,
  styles: `
    img{
      width: 100%;
      height: auto
    }
  `,
})
export class CommentsComponent {}
