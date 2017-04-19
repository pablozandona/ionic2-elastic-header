import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Content } from 'ionic-angular';

@Directive({
  selector: '[elasticHeader]'
})
export class ElasticHeaderDirective {

  scrollHandle: any;
  header: any;
  headerHeight: any;
  translateAmt: any = 0;
  scrollTop: any;
  lastScrollTop: any;
  opacity: any = 1;

  @Input('elasticHeader') content: Content;

  constructor(public element: ElementRef, public renderer: Renderer2) {}

  ngOnInit() {
    this.scrollHandle = this.content;

    this.header = this.element.nativeElement;
    this.headerHeight = this.header.clientHeight;
    this.renderer.setStyle(this.header, 'webkitTransformOrigin', 'center bottom');

    this.content.ionScroll.subscribe(($event: any) => {
      window.requestAnimationFrame(() => {
        this.updateElasticHeader();
      });
    });

    window.addEventListener('resize', () => {
      this.headerHeight = this.header.clientHeight;
    }, false);
  }

  updateElasticHeader() {

    let result;
    this.scrollTop = this.scrollHandle.scrollTop;

    if (this.lastScrollTop <= this.scrollTop) {
      if (this.translateAmt >= (-this.headerHeight)) {
        this.translateAmt -= (this.scrollTop - this.lastScrollTop) / 4;
      } else {
        this.translateAmt = -this.headerHeight - 12;
        this.opacity = 0;
      }

    } else {
      if (this.translateAmt < 0) {
        result = this.translateAmt + (this.lastScrollTop - this.scrollTop) / 4;
        if (result > 0) {
          result = 0;
        }
        this.translateAmt = result;
      } else {
        this.translateAmt = 0;
      }
    }

    this.renderer.setStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0)');
    this.lastScrollTop = this.scrollTop;

  }

}