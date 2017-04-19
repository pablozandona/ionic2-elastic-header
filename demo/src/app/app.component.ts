import { Component, ViewChild } from '@angular/core';
import { MyList } from '../pages/myList/myList';
import { Content } from "ionic-angular";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = MyList;

  constructor() {
  }
}
