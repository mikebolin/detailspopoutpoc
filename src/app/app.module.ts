import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { PopupModule } from '@progress/kendo-angular-popup';

import { InvoiceDetailsPopup } from './details/invoice-details-popup';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PopupModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, InvoiceDetailsPopup ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
