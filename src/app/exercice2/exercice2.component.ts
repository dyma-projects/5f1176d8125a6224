import { Component, ViewChild,  ElementRef} from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component {

@ViewChild('myInput', {static: true}) public inputElement: ElementRef;

  public valeur: string;

  constructor() { }

  inputValueChange(event: any): void {
    this.valeur = this.inputElement.nativeElement.value;
   }

/*
  // !! executée aussi lors d'input sur les autres composants (exercice1Componant)
  ngDoCheck(): void {
    console.log('ngDoCheck in Exercice2Component');
    this.valeur = this.inputElement.nativeElement.value;
  }
*/

}
