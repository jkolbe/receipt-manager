import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Receipt } from './receipt';
import { ReceiptService } from './receipt.service';

@Component({
  moduleId: module.id,
  selector: 'receipt-details',
  template: `
  	<div class="container">
  		<div class="row">
  			<div class="col-xs-12">
  				<p>sample receipt: {{id}}</p>
  			</div>
  			<div class="col-xs-12">
          		<a (click)="goBack()">< Back</a>
        	</div>
  		</div>
  	</div>

  	
  `
})

export class ReceiptDetailComponent implements OnInit {

	receipt: Receipt;
	id;

	constructor(
    	private receiptSvc: ReceiptService,
    	private route: ActivatedRoute,
    	private location: Location
  	) {}

	ngOnInit(): void {
		console.log('a');
		console.log(this.route.params._value.id);
		this.id = this.route.params._value.id;

	}

	goBack(): void {
		this.location.back();
	}

}

//ReceiptDetailComponent

