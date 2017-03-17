import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyList } from '../pages/myList/myList';
import { ElasticHeaderModule } from "ionic2-elastic-header";

@NgModule({
  declarations: [
    MyApp,
    MyList
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ElasticHeaderModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyList
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
