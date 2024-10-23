import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';

  public titulo: string = "Primer ejemplo de Angular";
  public contador: number = 4;

  incrementar (valor: number): void{
    this.contador+=valor;
  }

  resetearContador(): void{
    this.contador = 4;
  }
}
