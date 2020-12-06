import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CzgSwitch } from './czg-switch';


@NgModule({
    declarations: [
        CzgSwitch
    ],
    imports: [
        CommonModule,
    ],
    exports: [CzgSwitch]
})
export class CzgSwitchModule { }
