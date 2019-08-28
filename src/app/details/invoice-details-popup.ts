import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
import { InvoiceDetails } from './invoice-details-model'

@Component({
  selector: 'invoice-details',
  templateUrl: './invoice-details-popup.html',
  styleUrls: ['./invoice-details-popup.scss']
})
export class InvoiceDetailsPopup implements OnInit {

  public show: boolean = true;
  public get animate(): any {
    if (this.show) {
      return {
        type: this.animation,
        direction: this.direction,
        duration: this.durationMS
      };
    }
    return false;
  }
  toggleText: String;
  @Input() invoiceItems: InvoiceDetails;
  @Input() animation: String;
  @Input() direction: String;
  @Input() durationMS: Number;
  @Input() showButtonText: String;
  @Input() hideButtonText: String;

  ngOnInit() {

        this.show = false;
      this.toggleText = this.showButtonText;
  }
  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? this.hideButtonText : this.showButtonText;
  }

}
