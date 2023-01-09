import { Component, Input } from "@angular/core";

@Component({
  selector: 'my-print',
  template: `<strong>{{message}}</strong>`,

})

export class PrintComponent {
  @Input() message!: string;

  ngOnChanges() {
    console.log('in print ngOnChanges');
  }
}