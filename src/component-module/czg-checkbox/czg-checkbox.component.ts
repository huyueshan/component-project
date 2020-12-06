import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'czg-checkbox',
  templateUrl: './czg-checkbox.component.html',
  styleUrls: ['./czg-checkbox.component.less']
})
export class CzgCheckboxComponent implements OnInit {
  @Input() size: number = 20;                // checkbox 大小
  @Input() fontSize: number = 12;            // 对钩字体图标大小
  @Input() fontColor: string = '#ffffff';    // 对钩颜色
  @Input() defaultColor: string = '#ffffff'; // 默认checkbox颜色
  @Input() activeColor: string = '#2761ff';  // 选中checkbox颜色
  @Input() disabled: boolean;                // 是否禁用
  @Input() binary: boolean;                  // 是否绑定单个布尔值 否为绑定一个数组
  @Input() model: boolean | any[];           // 绑定值 binary为true时布尔值，否则数组
  @Input() value: boolean;                   // 当前对应数据，绑定值为数组时使用
  @Input() label: string;                    // 当前对应数据，绑定值为数组时使用
  @Input() vaildFn: any;                     // 点击操作前执行，返回一个Observable对象 执行返回’0k'后继续执行后面的change 用于点击操作前的确认
  @Output() modelChange = new EventEmitter()
  checked: boolean = false;
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['model']) {
      if (this.binary) {
        this.checked = !!this.model
      } else {
        this.checked = this.value ? (<any>this.model || []).indexOf(this.value) != -1 : false
      }
    }

  }
  click() {
    (
      (this.vaildFn && typeof this.vaildFn == 'function') ?
        this.vaildFn(this.checked) :
        of('ok')
    ).subscribe(result => {
      if (result == 'ok') {
        this.checked = !this.checked
        if (this.binary) {
          this.modelChange.emit(this.checked)
        } else {
          const arr = (<any>this.model || []).filter(it => it != this.value);
          if (this.checked) { arr.push(this.value) };
          this.modelChange.emit(arr);

        }
      }
    })
  }

}
