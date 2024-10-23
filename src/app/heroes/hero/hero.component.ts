import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 25;
  public heroName: string[] = ["Spiderman", "Ironman", "Hulk", "Martosman", "Thor"];
  public heroeBorrado?: string;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }
  getHeroDescription(): string{
    return `${ this.name } - ${ this.age }`;
  }
  changeHero(): void{
    this.name = this.name=== "Ironman" ? "martosman":"Ironman";
  }
  changeAge(): void{
    this.age = this.age=== 36 ? 25:36;
  }
  restart(): void{
    this.age=25;
    this.name="Ironman";
    this.heroName=["Spiderman", "Ironman", "Hulk", "Martosman", "Thor"];
  }
  borrarHeroe(): void{
    this.heroeBorrado = this.heroName.pop();
  }
  esBorrado():string{
    return this.heroeBorrado===undefined ? "No ha borrado nada":"Héroe borrado: " + this.heroeBorrado;
  }
}
