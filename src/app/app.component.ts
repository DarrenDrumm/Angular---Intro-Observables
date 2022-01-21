import { Component, VERSION } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name1 : string;
  ls : LocalStorageService;
  constructor(theService : LocalStorageService) {
    this.ls = theService;
  }
  ngOnInit() {
    this.ls.set('isValid', true);
  }

  ngAfterContentInit() {
    this.name1 = 'Angular ' + VERSION.major + this.ls.get('isValid');
    this.ls.set('isValid', false);
    this.ls.set('isValid', false);
    this.ls.set('isValid', false);
    this.ls.set('isValid', false);
  }
  
}
