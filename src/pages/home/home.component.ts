import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import * as jquery from 'jquery'
import { ISlimScrollOptions, SlimScrollEvent, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  // @ViewChild('mydiv') mydiv: HTMLTableCellElement
  @ViewChild('mydiv') mydiv: ElementRef
  opts: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent>;
  height: number = 100;
  enabled: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    // 引入并使用jQuery方式
    console.log(jquery('.body'));

    // window
    fromEvent(this.mydiv.nativeElement, 'click').subscribe((event) => { 
      console.log(this.height);
    })

  }
}
