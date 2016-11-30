import { Receipt } from './receipt';

import { Injectable } from '@angular/core';
import { Headers, Http }		from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ReceiptService {

	private headers = new Headers({'Content-Type': 'application/json'});
  	//private apiUrl = '/data.json';
  	private apiUrl = "http://localhost:3001/api";

	constructor(private http:Http){}


	getReceipts(): Promise<Receipt[]> {
    	return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response.json() as Receipt[])
               .catch(this.handleError);
  	}

  	getReceipt(id:string): Promise<Receipt> {
  		return this.http.get(this.apiUrl+'/'+id)
               .toPromise()
               .then(response => response.json() as Receipt)
               .catch(this.handleError);
  	}

	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); 
    	return Promise.reject(error.message || error);
  	}



}
