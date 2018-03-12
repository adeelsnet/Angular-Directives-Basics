import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  detail = '';
  detailBtn = true;
  inputLock = false;
  click = false;
  /* counter = 0; */
  arrayCount = [];

  constructor() { }

  ngOnInit() {
  }

  onOff() {
    /* this.counter++; */
    /* this.arrayCount.push(this.counter); */
    /* this.arrayCount.push(this.arrayCount.length + 1); */
    this.arrayCount.push(new Date() );
    this.click = true;
    if (!this.inputLock) {
      this.inputLock = true;
    } else {
      this.inputLock = false;
    }
  }

enableDetailBtn (inputValue: Event) {
  this.detail = (<HTMLInputElement>inputValue.target).value;
  if (this.detail === '') {
    this.detailBtn = true;
  } else {
    this.detailBtn = false;
  }
}
 /*  getColor(x) {
    if (x < 5) {
    return 'transparent';
    } else {
      return 'blue';
    }
  } */
}
