import { Component } from '@angular/core';
import { InvoiceDetails } from './details/invoice-details-model'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

    const obj = {
      InvoiceType: this.shipment.carrierInvoices[0].invoiceId,
      InvoiceNumber: newValue.fullName,
      Status: 'test',
      Total: 'test',
      InvoiceDate: new Date()
    } as InvoiceDetails;
  
}
