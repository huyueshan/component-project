import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComposeMessageComponent } from './compose-message.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ComposeMessageComponent
    ],
    exports: [ComposeMessageComponent]
})
export class ComposeMessageModule { }
