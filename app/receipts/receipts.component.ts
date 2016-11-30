import { Component, OnInit } from '@angular/core';

import { Receipt } from './receipt';
import { ReceiptService } from './receipt.service';

@Component({
  moduleId: module.id,
  selector: 'receipts',
  template: `
  	<div class="container">
  		<div class="row">
  			<div class="col-xs-12">
				<div *ngFor="let receipt of receipts">
					<p>Merchant: {{receipt.merchant}}</p>
				</div>
  			</div>
  		</div>
  	</div>
  `
})
export class ReceiptsComponent implements OnInit {

	receipts: Receipt[] = [];

  constructor(private receiptSvc: ReceiptService) { }

  ngOnInit(): void {
    this.receiptSvc.getReceipts()
      .then(receipts => {
        this.receipts = receipts;
        console.log(this.receipts);
      });
    //this.receiptSvc.getReceipts().then(receipts => this.receipts = receipts.slice(1, 5));
  }

	// constructor(private receiptSvc:ReceiptService) {
 //    receiptSvc.getNewsItems().subscribe(
 //      response => { this.receipts = response.json(); },
 //      error => { console.log('Sorry, there was a problem with your data'); }
 //    )
 //  }

}