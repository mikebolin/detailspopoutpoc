import { Component } from '@angular/core';

class InvoiceDetails {
  InvoiceType: string;
  InvoiceNumber: string;
  Status: string;
  Total: number;
  InvoiceDate : Date;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  details: InvoiceDetails;

  constructor(){
    this.details = {
      InvoiceType: 'Customer',
      InvoiceNumber: '60300440TF28',
      Status: 'Approved',
      Total: 639.97,
      InvoiceDate: new Date('01/13/2019')
    } as InvoiceDetails;
  }


  
}
