import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-act',
  templateUrl: './addAct.component.html',
  styleUrls: ['./addAct.component.scss']
})

export class AddActComponent {
  age: string[];
  price: any;
  method: any;
  constructor() {
    this.age = ['none', '18+', '21+'];
    this.price = [{name: 'free', value: 0}, {name: 'non-free', value: 1}];
    this.method = [{name: 'method1', value: 0}, {name: 'method2', value: 1}, {name: 'method3', value: 2}];
  }
}
