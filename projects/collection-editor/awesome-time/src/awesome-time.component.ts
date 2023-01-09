import { Component } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'awesome-time',
  template: `<h1> This is a Awesometime component</h1>
              Time: {{time}}
              <br />=============<br />
              <lib-header></lib-header>
              <lib-dialcode></lib-dialcode>
              `,
  styles: []
})
export class AwesomeTimeComponent {
  title = 'showcase';
  time = moment().format();
}
