# ionic2-elastic-header

***ionic2-elastic-header*** is a directive for Ionic 2 and Ionic 3 to cause headers to shrink and reveal.

![demo](demo.gif)

## Installation

```bash
npm install ionic2-elastic-header --save
```

### app.module.ts

* Import ElasticHeaderModule;
* Add ElasticHeaderModule in imports;

```typescript
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyList } from '../pages/myList/myList';
import { ElasticHeaderModule } from "ionic2-elastic-header/dist";

@NgModule({
  declarations: [
    MyApp,
    MyList
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ElasticHeaderModule //Add ElasticHeaderModule here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyList
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
```

## Usage

* Add `fullscreen` attribute in `<ion-content>`;
* Assign a  `#ioncontentID` attribute in `<ion-content>`;
* Add `elastic-header` attribute in `<ion-header>`, and assign with value of your #ioncontentID;

### myList.html

```html
<!--Add the elastic-header attribute-->
<ion-header [elastic-header]="myContent">
  <ion-navbar>
    <ion-title>My List</ion-title>
  </ion-navbar>
</ion-header>
<!--Add the fullscreen attribute and #<componentID> -->
<ion-content class="home" fullscreen #myContent>
  <ion-list>
    <ion-item *ngFor="let item of items">
      <ion-icon name="person" item-left></ion-icon>
      {{item.name}}
    </ion-item>
  </ion-list>
</ion-content>
```

## Licence

This project is licensed under the ISC license. See the [LICENSE](LICENSE.md) file for more info.
