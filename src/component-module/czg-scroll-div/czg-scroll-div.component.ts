import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';

@Component({
  selector: 'czg-scroll-div',
  templateUrl: './czg-scroll-div.component.html',
  styleUrls: ['./czg-scroll-div.component.less']
})
export class CzgScrollDivComponent implements OnInit {

  opts: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent> = new EventEmitter<SlimScrollEvent>();

  @Input() enabled: boolean = true;

  constructor() { }

  ngOnInit() {
    this.opts = {
      position: 'right',
      barBackground: '#C9C9C9',
      barOpacity: '0.8',
      barWidth: '10',
      barBorderRadius: '20',
      barMargin: '0 4px',
      gridBackground: '#D9D9D9',
      gridOpacity: '1',
      gridWidth: '0',
      gridBorderRadius: '20',
      gridMargin: '0',
      alwaysVisible: true,
      visibleTimeout: 500,
      alwaysPreventDefaultScroll: false,
    }
    // 触发各种滚动事件
    // this.play();
  }
  ngAfterViewInit(): void {
    const EleResize: any = {
      _handleResize: function (e) {
        var ele = e.target || e.srcElement;
        var trigger = ele.__resizeTrigger__;
        if (trigger) {
          var handlers = trigger.__z_resizeListeners;
          if (handlers) {
            var size = handlers.length;
            for (var i = 0; i < size; i++) {
              var h = handlers[i];
              var handler = h.handler;
              var context = h.context;
              handler.apply(context, [e]);
            }
          }
        }
      },
      _removeHandler: function (ele, handler, context) {
        var handlers = ele.__z_resizeListeners;
        if (handlers) {
          var size = handlers.length;
          for (var i = 0; i < size; i++) {
            var h = handlers[i];
            if (h.handler === handler && h.context === context) {
              handlers.splice(i, 1);
              return;
            }
          }
        }
      },
      _createResizeTrigger: function (ele) {
        var obj = document.createElement('object');
        obj.setAttribute('style',
          'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;opacity: 0; pointer-events: none; z-index: -1;');
        obj.onload = EleResize._handleObjectLoad;
        obj.type = 'text/html';
        ele.appendChild(obj);
        obj.data = 'about:blank';
        return obj;
      },
      _handleObjectLoad: function (evt) {
        this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
        this.contentDocument.defaultView.addEventListener('resize', EleResize._handleResize);
      }
    };
    if (document['attachEvent']) {//ie9-10
      EleResize.on = function (ele, handler, context) {
        var handlers = ele.__z_resizeListeners;
        if (!handlers) {
          handlers = [];
          ele.__z_resizeListeners = handlers;
          ele.__resizeTrigger__ = ele;
          ele.attachEvent('onresize', EleResize._handleResize);
        }
        handlers.push({
          handler: handler,
          context: context
        });
      };
      EleResize.off = function (ele, handler, context) {
        var handlers = ele.__z_resizeListeners;
        if (handlers) {
          EleResize._removeHandler(ele, handler, context);
          if (handlers.length === 0) {
            ele.detachEvent('onresize', EleResize._handleResize);
            delete ele.__z_resizeListeners;
          }
        }
      }
    } else {
      EleResize.on = function (ele, handler, context) {
        var handlers = ele.__z_resizeListeners;
        if (!handlers) {
          handlers = [];
          ele.__z_resizeListeners = handlers;

          if (getComputedStyle(ele, null).position === 'static') {
            ele.style.position = 'relative';
          }
          var obj = EleResize._createResizeTrigger(ele);
          ele.__resizeTrigger__ = obj;
          obj.__resizeElement__ = ele;
          console.log(obj, ele);
        }
        handlers.push({
          handler: handler,
          context: context
        });
      };
      EleResize.off = function (ele, handler, context) {
        var handlers = ele.__z_resizeListeners;
        if (handlers) {
          EleResize._removeHandler(ele, handler, context);
          if (handlers.length === 0) {
            var trigger = ele.__resizeTrigger__;
            if (trigger) {
              trigger.contentDocument.defaultView.removeEventListener('resize', EleResize._handleResize);
              ele.removeChild(trigger);
              delete ele.__resizeTrigger__;
            }
            delete ele.__z_resizeListeners;
          }
        }
      }
      const resizeDiv = document.getElementById('resizeDiv');
      EleResize.on(resizeDiv, () => {
        // console.log("resize");
        // // 滚动条重置方法
        this.scrollEvents.emit(new SlimScrollEvent({
          type: 'recalculate',
        }));

      });
    }
  }
  // play(): void {
  //   let event = null;

  //   Promise.resolve()
  //     .then(() => this.timeout(3000))
  //     .then(() => {
  //       event = new SlimScrollEvent({
  //         type: 'scrollToBottom',
  //         duration: 2000,
  //         easing: 'inOutQuad'
  //       });

  //       this.scrollEvents.emit(event);
  //     })
  //     .then(() => this.timeout(3000))
  //     .then(() => {
  //       event = new SlimScrollEvent({
  //         type: 'scrollToTop',
  //         duration: 3000,
  //         easing: 'outCubic'
  //       });

  //       this.scrollEvents.emit(event);
  //     })
  //     .then(() => this.timeout(4000))
  //     .then(() => {
  //       event = new SlimScrollEvent({
  //         type: 'scrollToPercent',
  //         percent: 80,
  //         duration: 1000,
  //         easing: 'linear'
  //       });

  //       this.scrollEvents.emit(event);
  //     })
  //     .then(() => this.timeout(2000))
  //     .then(() => {
  //       event = new SlimScrollEvent({
  //         type: 'scrollTo',
  //         y: 200,
  //         duration: 4000,
  //         easing: 'inOutQuint'
  //       });

  //       this.scrollEvents.emit(event);
  //     });

  // }
  // timeout(ms: number): Promise<void> {
  //   return new Promise(resolve => setTimeout(() => resolve(), ms));
  // }

}
