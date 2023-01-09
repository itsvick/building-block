import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <p>
      timer works!
      time: 
      <awesome-time></awesome-time>
    </p>
  `,
  styles: [
  ]
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
