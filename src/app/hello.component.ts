import { Component, Input } from '@angular/core';


@Component({
  selector: 'hello',
  template: `<h1>Hello {{myname}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() myname: string;
}
