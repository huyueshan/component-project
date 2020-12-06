import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-module',
  templateUrl: './component-module.component.html',
  styleUrls: ['./component-module.component.less']
})
export class ComponentModuleComponent implements OnInit {

  checkList1 = [
    { value: 'A', label: 'A选项' },
    { value: 'B', label: 'B选项' },
    { value: 'C', label: 'C选项' },
    { value: 'D', label: 'D选项' },
  ]
  checkListSelect = ['C','A',]
  constructor() { }

  ngOnInit() {
  }

  _consoleLog(e) {
    console.log(e);
    console.log(this.checkListSelect);
  }
}
