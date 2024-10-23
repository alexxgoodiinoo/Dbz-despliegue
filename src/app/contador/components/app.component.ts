import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>Hola mundo</h1>
    <hr>
    <p>Texto: {{titulo}}</p>
    <p>Contador: {{contador}}</p>

    <button (click)="modificar(1)">+1</button>
    <button (click)="resetearContador()">Reset</button>
    <button (click)="modificar(-1)">-1</button>`
})

export class ContadorComponente{
    constructor() { }
    public titulo: string = 'Segundo componente de Angular';
    public contador: number = 25;

    modificar (valor: number):void {
        this.contador+=valor;
    }

    resetearContador ():void {
        this.contador=0;
    }
}