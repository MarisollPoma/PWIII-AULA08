import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  exibeNome : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  exibir() {
    this.exibeNome = !this.exibeNome;
  
  }

  getValor() : boolean {
    return this.exibeNome;
 
  }

}
