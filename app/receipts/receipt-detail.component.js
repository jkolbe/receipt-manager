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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var receipt_service_1 = require('./receipt.service');
var ReceiptDetailComponent = (function () {
    function ReceiptDetailComponent(receiptSvc, route, location) {
        this.receiptSvc = receiptSvc;
        this.route = route;
        this.location = location;
    }
    ReceiptDetailComponent.prototype.ngOnInit = function () {
        //console.log(this.route.params.value.id);
        //this.id = this.route.params._value.id;
        var _this = this;
        // this.route.params
        //     		.switchMap((params: Params) => {
        //     			return this.receiptSvc.getReceipt(+params['id'])
        //     		).subscribe(receipt => {
        //     			console.log('RETURNING '+receipt);
        //     			return this.receipt = receipt
        //     		});
        this.receiptSvc.getReceipt('583de64f43d5305354ca53a2')
            .then(function (receipt) {
            console.log(receipt);
            return _this.receipt = receipt;
        });
    };
    ReceiptDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReceiptDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'receipt-details',
            template: "\n  \t<div class=\"container\" *ngIf=\"receipt\">\n  \t\t<div class=\"row\">\n  \t\t\t<div class=\"col-xs-12\">\n  \t\t\t\t<p>sample receipt: {{receipt._id}}</p>\n  \t\t\t\t<p>{{receipt.merchant}}</p>\n  \t\t\t\t<p>{{receipt.date}}</p>\n  \t\t\t\t<p>{{receipt.total}}</p>\n  \t\t\t</div>\n  \t\t\t<div class=\"col-xs-12\">\n          \t\t<a (click)=\"goBack()\">< Back</a>\n        \t</div>\n  \t\t</div>\n  \t</div>\n\n  \t\n  "
        }), 
        __metadata('design:paramtypes', [receipt_service_1.ReceiptService, router_1.ActivatedRoute, common_1.Location])
    ], ReceiptDetailComponent);
    return ReceiptDetailComponent;
}());
exports.ReceiptDetailComponent = ReceiptDetailComponent;
//ReceiptDetailComponent
//# sourceMappingURL=receipt-detail.component.js.map