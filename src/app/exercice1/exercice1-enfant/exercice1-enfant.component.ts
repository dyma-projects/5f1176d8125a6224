import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteurValue: number;

  @Output() changeValue: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  increment(): void {
    console.log('increment');
    this.changeValue.emit(1);
  }

  decrement(): void {
    console.log('decrement');
    this.changeValue.emit(-1);
  }
}
