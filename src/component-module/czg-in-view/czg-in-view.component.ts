import { Component, OnInit, OnDestroy, ContentChild, TemplateRef, Input, Output, EventEmitter, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'czg-in-view',
  templateUrl: './czg-in-view.component.html',
  styleUrls: ['./czg-in-view.component.less']
})
export class CzgInViewComponent implements OnInit, OnDestroy {

  observer: any;
  inView: boolean = false;
  once50PctVisible: boolean = false;

  fulfill: boolean = false;
  @ContentChild(TemplateRef) template: TemplateRef<any>;
  @Input() options: any = { threshold: [.1, .2, .3, .4, .5, .6, .7, .8] };
  @Output('inView') inView$: EventEmitter<any> = new EventEmitter();
  @Output('notInView') notInView$: EventEmitter<any> = new EventEmitter();

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
      this.observer.POLL_INTERVAL = 100;
      this.observer.USE_MUTATION_OBSERVER = false;
      this.observer.observe(this.element.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer && this.observer.disconnect();
  }

  handleIntersect(entries, observer): void {
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio > 0.5) {

        this.inView = true;
        this.fulfill = true;
        this.inView$.emit(entry);
      } else {
        this.inView = false;
        this.notInView$.emit(entry);
      }
    });
  }

}

