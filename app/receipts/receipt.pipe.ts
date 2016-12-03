import { Pipe, PipeTransform } from '@angular/core';
import { Receipt } from './receipt';

@Pipe({
	name: 'receiptSearch'
})

export class ReceiptSearchPipe implements PipeTransform {

	transform(receipts: Receipt[], searchText:any) {
		if(searchText === undefined || searchText.length == 0) {
			return receipts;
		}

		let reg = new RegExp(searchText, 'i')

		return receipts.filter(receipt =>
			receipt.merchant.search(reg) >= 0 || receipt.date.search(reg) >= 0
		)
	}

}

@Pipe({
	name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {

	transform(receipts: Receipt[], args:string) {
		
		if(args === undefined || args.length == 0) {
			return receipts;
		}

		return receipts.sort(function(a,b){
			return a[args] > b[args] ? 1 : -1;
		});

	}

}