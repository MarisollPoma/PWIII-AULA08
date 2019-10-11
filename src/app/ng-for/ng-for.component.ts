import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

nomes : string[] = ['Valter', 'Ronqui', 'Quitéria', 'Fátima'];

  constructor() { }

  ngOnInit() {
  }

}
