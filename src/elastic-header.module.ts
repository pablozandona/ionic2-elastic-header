import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ElasticHeader } from './elastic-header.directive';

@NgModule({
    declarations: [
        ElasticHeader
    ],
    imports: [IonicModule],
    exports: [ElasticHeader]
})
export class ElasticHeaderModule {}
