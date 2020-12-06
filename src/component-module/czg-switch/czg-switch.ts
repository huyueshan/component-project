import { forwardRef, Component, Output, Input, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


export const TOGGLEBUTTON_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CzgSwitch),
  multi: true
};

@Component({
  styleUrls: ['./czg-switch.less'],
  selector: 'czg-switch',
  template: `
      <div [class.checked]="checked" [class.disabled]="disabled" (click)="toggle($event)"><span>{{[btns[1]]}}</span><span>{{[btns[0]]}}</span></div>`,
  providers: [TOGGLEBUTTON_VALUE_ACCESSOR]
})
export class CzgSwitch implements ControlValueAccessor {
  changeFn = (any?) => { };
  touchFn = (any?) => { };
  checked: boolean;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @Input() disabled: boolean = false;
  @Input() btns: string[] = ['是', '否'];

  writeValue(value: boolean) {
    this.checked = !!value;
  }


  registerOnChange(fn: any) {
    this.changeFn = fn;
  }

  toggle(event) {
    if (this.disabled) {
      return;
    }
    this.checked = !this.checked;
    this.changeFn(this.checked);
    this.touchFn && this.touchFn();
    this.onChange.emit({
      originalEvent: event,
      checked: this.checked,
      element: this
    });
  }

  registerOnTouched(fn: any) {
    this.touchFn = fn;
  }


  setDisabledState?(isDisabled: boolean) {

    this.disabled = !!isDisabled;
  }
}


