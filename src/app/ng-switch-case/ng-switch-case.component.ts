import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.css']
})
export class NgSwitchCaseComponent implements OnInit {

numero : number = 0;

inc() {
       this.numero++;
}

  constructor() { }

  ngOnInit() {
  }

}
