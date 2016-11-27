import { Injectable } from '@angular/core';
import { Http }		from '@angular/http';

@Injectable()

export class ReceiptService {
	constructor(private http:Http){}

	getNewsItems() {
    	return this.http.get("data.json");
    }

}