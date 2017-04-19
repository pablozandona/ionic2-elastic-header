import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElasticHeaderDirective } from './elastic-header.directive';

export * from './elastic-header.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ElasticHeaderDirective
  ],
  exports: [
    ElasticHeaderDirective
  ]
})
export class ElasticHeaderModule {}