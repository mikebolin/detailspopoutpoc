import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'invoice-details',
  templateUrl: './invoice-details-popup.html',
  styleUrls: ['./invoice-details-popup.scss']
})
export class InvoiceDetailsPopup implements OnInit {
  public toggleText: string = 'Invoice Data';
  public show: boolean = true;
  public get animate(): any {
    if (this.show) {
      return {
        type: 'expand',
        direction: 'down',
        duration: 200
      };
    }
    return false;
  }
  public invoiceItems: any[] = [
    {
      InoiceType: 'Customer',
      InvoiceNumber: '60300440TF28',
      Status: 'Approved',
      Total: 639.97,
      InvoiceDate: '01/13/2019'
    }
  ];

  ngOnInit() {
    this.show = false;
  }

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? 'Invoice' : 'test';
  }
}
