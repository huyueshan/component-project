import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
declare var $: any;
@Component({
  selector: 'czg-tree',
  template: `
    <czg-node [list]="list" [nodeTemplate]="nodeTemplate"></czg-node>
  `
})
export class CzgTreeComponent {
  @Input() list = [
    { name: 'name1', off: true, children: [{ name: 'name1_1', children: [{ name: 'name1_1_1' }, { name: 'name1_1_2' },] }, { name: 'name1_2' },] },
    { name: 'name2', children: [{ name: 'name2_1' }, { name: 'name2_2' },] },
    { name: 'name3', children: [{ name: 'name3_1' }, { name: 'name3_2' },] },
  ]
  // @ContentChild(TemplateRef) nodeTemplate: TemplateRef<any>;
  @ContentChild('treeNode') nodeTemplate: TemplateRef<any>;
  ngOnInit(): void {
  }
}
@Component({
  selector: 'czg-node',
  styleUrls: ['./czg-tree.component.less'],
  template: `
    <ng-container *ngFor="let item of list; let i=index">
      <div fxLayout="row" fxLayoutAlign="start center" style="min-height: 20px">
        <div [style.paddingLeft]="left+'px'">
          <span style="width:20px" fxLayoutAlign="center center">
            <span fxFlex fxLayoutAlign="center center" *ngIf="item.children && item.children.length" class="hover-pointer" (click)="checktier(item, $event)">
                <!-- <i class="icon-rc-triangle-down active" [ngClass]="{off: item.off}"></i> -->
                <!-- <i class="icon icon-play3 active" [ngClass]="{off: item.off}"></i> -->
                <i class="fa fa-caret-right faicon" [ngClass]="{off: item.off}"></i>
                
              </span>
          </span>
        </div>
        <div fxFlex fxLayoutAlign="start center">
          <ng-container *ngTemplateOutlet="nodeTemplate; context: {item: item}"></ng-container>
        </div>
      </div>
      <ng-container *ngIf="item.children && item.children.length">
        <div [@children]="(item.off ? 'visible' : 'hidden')" >
          <czg-node [list]="item.children" [nodeTemplate]="nodeTemplate" [left]="left+20"></czg-node>
        </div>
      </ng-container>
    </ng-container>
  `,
  animations: [
    trigger('children', [
      state('hidden', style({
        height: '0px',
        opacity: '0',
        zIndex: '-1'
      })),
      state('visible', style({
        height: '*',
        opacity: '1',
        zIndex: '*'
      })),
      transition('visible => hidden', animate('300ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('300ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class CzgNodeComponent {
  @Input() list: any;
  @Input() nodeTemplate: TemplateRef<any>;
  @Input() left = 0;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // this.list.forEach((it, i) => {
    //   console.log(`#${this.left}_${i}`,this.left + 20 + 'px', $(`#${this.left}_${i}`).children());
    //   $(`#${this.left}_${i}`).children(".handle").css({ paddingLeft: this.left + 20 + 'px' })

    //   // console.log($(`#${this.left}_${i}`).children(".handle"), 'on:', $(`#${this.left}_${i}`).children("#on_off"));
    //   // const dom = $($(`#${this.left}_${i}`).children("#on_off")[0]);
    //   // dom.clone(true).prependTo($(`#${this.left}_${i}`).children(".handle"));
    //   // dom.remove();
    // })
    // $('.' + this.left).children(".handle").css({ paddingLeft: this.left + 20 + 'px' });
    // console.log($('.' + this.left).children(".handle"), $('.' + this.left).children("#on_off"));

  }

  checktier(data, $event = null) {
    if ($event) {
      $event.stopImmediatePropagation();
      $event.stopPropagation();
    }
    data.off = !data.off;
  }
}
