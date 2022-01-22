import { Component, VERSION } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name1 : string;
  localStorage: LocalStorageService;

  constructor(localStorage : LocalStorageService) {
    this.localStorage = localStorage;
  }
  ngOnInit() {
    this.localStorage.set('isValid', true);
    this.localStorage.set('user.name', 'Darren')
  }

  ngAfterContentInit() {
    this.localStorage.data.subscribe(keyvalue => {
      this.name1 = 'Angular ' + VERSION.major + keyvalue.get('isValid') + '  User Name: ' + keyvalue.get('user.name');
    });
    
    this.timeout(10000).then(() => {
      this.localStorage.set('isValid', false);
      this.localStorage.set('user.name', 'Angeline');
    });
  }
  timeout(ms) { //pass a time in milliseconds to this function
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
