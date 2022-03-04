import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputMonthComponent } from './input-month/input-month.component';
import { InputDatetimeComponent } from './input-datetime/input-datetime.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { InputResetComponent } from './input-reset/input-reset.component';
import { InputSubmitComponent } from './input-submit/input-submit.component';


@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputMonthComponent,
    InputDatetimeComponent,
    InputRadioComponent,
    InputResetComponent,
    InputSubmitComponent,
     
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


