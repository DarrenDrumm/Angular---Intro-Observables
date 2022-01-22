import { Component, VERSION } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name : string; // This variable is within the html component and is not required. It just makes it more readable in my opinion.
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
      this.name = 'Angular ' + VERSION.major + keyvalue.get('isValid') + '  User Name: ' + keyvalue.get('user.name');
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
