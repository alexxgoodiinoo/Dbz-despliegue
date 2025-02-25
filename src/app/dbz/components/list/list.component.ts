import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
    selector: 'app-dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})


export class ListComponent { 
    @Input()
    public characterList: Character[] = [{
        id: "1234",
        name: 'Trunk',
        power: 10
    }]

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();
    
    onDeleteCharacter (id: string):void{
        if(!id) return;
        this.onDelete.emit(id);
    }
    
}
