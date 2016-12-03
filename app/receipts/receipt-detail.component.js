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
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.receiptSvc.getReceipt(params['id']); })
            .subscribe(function (receipt) { return _this.receipt = receipt; });
    };
    ReceiptDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReceiptDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'receipt-details',
            template: "\n    <div class=\"container\">\n      <div class=\"content-holder\">\n        <div class=\"row\">\n          <div *ngIf='receipt' class=\"col-xs-12\">\n            <p>{{receipt._id}}</p>\n            <p>{{receipt.merchant}}</p>\n            <p>{{receipt.date}}</p>\n            <p>{{receipt.total}}</p>\n          </div>\n          <div class=\"col-xs-12\">\n            <a (click)=\"goBack()\">< Back</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [receipt_service_1.ReceiptService, router_1.ActivatedRoute, common_1.Location])
    ], ReceiptDetailComponent);
    return ReceiptDetailComponent;
}());
exports.ReceiptDetailComponent = ReceiptDetailComponent;
//# sourceMappingURL=receipt-detail.component.js.map