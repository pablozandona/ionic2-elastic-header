import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
import { Content } from "ionic-angular";

@Directive({
  selector: "[elasticHeader]"
})
export class ElasticHeaderDirective {
  header: HTMLElement;
  headerHeight: number;
  lastScrollTop: number = 0;
  translateAmt: number = 0;

  @Input("elasticHeader") content: Content;

  constructor(public element: ElementRef, public renderer: Renderer2) {}

  ngOnInit() {
    this.header = this.element.nativeElement;
    this.content.ionScroll.subscribe(ev =>
      requestAnimationFrame(() => this.updateElasticHeader(ev.scrollTop))
    );
  }

  // @HostListener("window:resize")
  // resize() {
  //   this.headerHeight = this.header.clientHeight;
  // }
  // Right now header height doesn't change when window resized. If needed in the future, use this to prevent memory leak.

  updateElasticHeader(scrollTop: number) {
    !this.headerHeight && (this.headerHeight = this.header.clientHeight);

    if (this.lastScrollTop < 0) this.translateAmt = 0;
    else {
      this.translateAmt += (this.lastScrollTop - scrollTop) / 4;
      if (this.translateAmt > 0) this.translateAmt = 0;
      if (this.translateAmt < -this.headerHeight - 12)
        this.translateAmt = -this.headerHeight - 12;
    }
    this.renderer.setStyle(
      this.header,
      "transform",
      "translate(0," + this.translateAmt + "px)"
    );
    this.lastScrollTop = scrollTop;
  }
}
