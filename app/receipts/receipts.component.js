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
var router_1 = require('@angular/router');
var receipt_service_1 = require('./receipt.service');
var ReceiptsComponent = (function () {
    function ReceiptsComponent(receiptSvc, router) {
        this.receiptSvc = receiptSvc;
        this.router = router;
        this.receipts = [];
    }
    ReceiptsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.receiptSvc.getReceipts()
            .then(function (receipts) { return _this.receipts = receipts; });
    };
    ReceiptsComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/detail', id]);
    };
    ReceiptsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'receipts',
            template: "\n  \t<div class=\"container\">\n  \t\t<div class=\"row\">\n  \t\t\t<div class=\"col-xs-12\">\n  \t\t\t\t<div *ngFor=\"let receipt of receipts\">\n  \t\t\t\t\t<p>Merchant: {{receipt.merchant}}</p>\n            <a (click)=\"gotoDetail(receipt._id)\">View Details</a>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\n  "
        }), 
        __metadata('design:paramtypes', [receipt_service_1.ReceiptService, router_1.Router])
    ], ReceiptsComponent);
    return ReceiptsComponent;
}());
exports.ReceiptsComponent = ReceiptsComponent;
//# sourceMappingURL=receipts.component.js.map