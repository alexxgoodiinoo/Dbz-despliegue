import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-add-caracter',
  templateUrl: './add-caracter.component.html',
  styleUrl: './add-caracter.component.css'
})
export class AddCaracterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character={
    id: "1234567",
    name:'',
    power: 0
  };

  emitCharacter(): void{
    

    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit({...this.character});

    this.character.name = "";
    this.character.power = 0;
  }
}
