import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interfaces';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor( private dbzService: DbzService ) { }

    get characters (): Character [] {
        return [...this.dbzService.characters];
      }
    
    onDeleteCharacter(id:string):void {
        this.dbzService.onDeleteCharacter(id);
    }

    onNewCharacter(character:Character){
        this.dbzService.characters.push(character);
    }
}