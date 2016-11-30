import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

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
            <a (click)="gotoDetail(receipt._id)">View Details</a>
  				</div>
  			</div>
  		</div>
  	</div>
  `
})
export class ReceiptsComponent implements OnInit {

	receipts: Receipt[] = [];

  constructor(
    private receiptSvc: ReceiptService,
    private router: Router) { }

  ngOnInit(): void {
    this.receiptSvc.getReceipts()
      .then(receipts => this.receipts = receipts);
  }

	gotoDetail(id): void {
    this.router.navigate(['/detail', id]);
  }

}