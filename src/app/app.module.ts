import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { PopupModule } from '@progress/kendo-angular-popup';

import { InvoiceDetailsPopup } from './details/invoice-details-popup';

    import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PopupModule, BrowserAnimationsModule, FontAwesomeModule ],
  declarations: [ AppComponent, HelloComponent, InvoiceDetailsPopup ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
