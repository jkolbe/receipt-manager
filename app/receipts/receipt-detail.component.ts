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
      <div class="content-holder">
        <div class="row">
          <div *ngIf='receipt' class="col-xs-12">
            <p>{{receipt._id}}</p>
            <p>{{receipt.merchant}}</p>
            <p>{{receipt.date}}</p>
            <p>{{receipt.total}}</p>
          </div>
          <div class="col-xs-12">
            <a (click)="goBack()">< Back</a>
          </div>
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
		this.route.params
      		.switchMap((params: Params) => this.receiptSvc.getReceipt(params['id']))
      		.subscribe(receipt => this.receipt = receipt);
	}

	goBack(): void {
		this.location.back();
	}

}