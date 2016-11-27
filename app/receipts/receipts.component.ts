import { Component } from '@angular/core';
import { ReceiptService } from './receipt.service';

@Component({
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
export class ReceiptsComponent {

	receipts = [];

	constructor(private receiptSvc:ReceiptService) {
        receiptSvc.getNewsItems().subscribe(
            response => { this.receipts = response.json(); },
            error => { console.log('Sorry, there was a problem with your data'); }
        )
    }

}