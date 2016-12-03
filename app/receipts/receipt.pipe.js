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
var ReceiptSearchPipe = (function () {
    function ReceiptSearchPipe() {
    }
    ReceiptSearchPipe.prototype.transform = function (receipts, searchText) {
        if (searchText === undefined || searchText.length == 0) {
            return receipts;
        }
        var reg = new RegExp(searchText, 'i');
        return receipts.filter(function (receipt) {
            return receipt.merchant.search(reg) >= 0 || receipt.date.search(reg) >= 0;
        });
    };
    ReceiptSearchPipe = __decorate([
        core_1.Pipe({
            name: 'receiptSearch'
        }), 
        __metadata('design:paramtypes', [])
    ], ReceiptSearchPipe);
    return ReceiptSearchPipe;
}());
exports.ReceiptSearchPipe = ReceiptSearchPipe;
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (receipts, args) {
        if (args === undefined || args.length == 0) {
            return receipts;
        }
        return receipts.sort(function (a, b) {
            return a[args] > b[args] ? 1 : -1;
        });
    };
    OrderByPipe = __decorate([
        core_1.Pipe({
            name: 'orderBy'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;
//# sourceMappingURL=receipt.pipe.js.map