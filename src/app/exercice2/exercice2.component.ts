import { Component, ViewChild,  ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component {

@ViewChild('myInput') public inputElement: ElementRef;

  public valeur: string;

  constructor() { }

  txtChange(event: any): void {
    this.valeur = this.inputElement.nativeElement.value;
   }

}
