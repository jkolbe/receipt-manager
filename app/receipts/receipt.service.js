"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ReceiptService = (function () {
    function ReceiptService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //private apiUrl = '/data.json';
        this.apiUrl = "http://localhost:3001/api";
    }
    ReceiptService.prototype.getReceipts = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ReceiptService.prototype.getReceipt = function (id) {
        //return id;
        return this.http.get(this.apiUrl + '/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        // console.log('----INSIDE IN----');
        // return this.http.get(this.apiUrl+'/'+id')
        //            .toPromise()
        //            .then(response => response.json() as Receipt)
        //            .catch(this.handleError);
        // return this.getReceipts()
        // 		.then(receipts => {
        // 			return receipts.find(receipt => {
        // 				console.log('LOOKING FOR: '+id);
        // 				console.log('RECEIPT ID: '+receipt._id);
        // 				return receipt._id === id
        // 			});
        // 		});
    };
    ReceiptService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ReceiptService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReceiptService);
    return ReceiptService;
}());
exports.ReceiptService = ReceiptService;
//# sourceMappingURL=receipt.service.js.map