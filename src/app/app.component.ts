import { Component } from '@angular/core';

class InvoiceDetails {
  InvoiceType: string;
  InvoiceNumber: string;
  Status: string;
  Total: string;
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
      InvoiceType: 'test',
      InvoiceNumber: 'test',
      Status: 'test',
      Total: 'test',
      InvoiceDate: new Date()
    } as InvoiceDetails;
  }


  
}
