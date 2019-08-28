import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
import { InvoiceDetails } from './invoice-details-model'
@Component({
  selector: 'invoice-details',
  templateUrl: './invoice-details-popup.html',
  styleUrls: ['./invoice-details-popup.scss']
})
export class InvoiceDetailsPopup implements OnInit {
  public toggleText: string = 'Invoice';
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
  @Input() invoiceItems: InvoiceDetails;

  ngOnInit() {
    this.show = false;
  }

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? 'Invoice' : 'Invoice';
  }
  
}
