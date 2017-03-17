import {Component, ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';

@Component({
  selector: 'myList',
  templateUrl: 'myList.html'
})

export class MyList {

  //add the elastic-header value
  @ViewChild(Content) myContent: Content;
  items: any;

  constructor() {
    this.items = [];
    for(let i=0; i < 50; i++) {
      this.items.push({ name: `Person ${i}`})
    }
  }
}
