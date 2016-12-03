import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Receipt } from './receipt';
import { ReceiptService } from './receipt.service';

@Component({
  moduleId: module.id,
  selector: 'receipts',
  template: `
    <div class="container">
      <div class="content-holder">
    		<div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label class="sr-only" for="receipt-search">Search</label>
              <input type="text" [(ngModel)] = "searchText" class="form-control" id="receipt-search" name="receipt-search" placeholder="Search...">
            </div>
          </div>
    			<div class="col-xs-12">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Merchant</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let receipt of (receipts | orderBy : 'date' | receiptSearch: searchText ) let i = index">
                  <td>{{i+1}}</td>
                  <td>{{receipt.merchant}}</td>
                  <td>{{receipt.date}}</td>
                  <td>{{receipt.total}}</td>
                  <td><a (click)="gotoDetail(receipt._id)">View Details</a></td>
                </tr>
              </tbody>
            </table>
    				
    			</div>
    		</div>
    	</div>
    </div>
  `
})
export class ReceiptsComponent implements OnInit {

	receipts: Receipt[] = [];
  searchText:string;

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