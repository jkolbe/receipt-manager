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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var receipt_service_1 = require('./receipts/receipt.service');
var receipt_pipe_1 = require('./receipts/receipt.pipe');
var receipt_pipe_2 = require('./receipts/receipt.pipe');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var receipts_component_1 = require('./receipts/receipts.component');
var receipt_detail_component_1 = require('./receipts/receipt-detail.component');
var receipt_form_component_1 = require('./receipts/receipt-form.component');
var ng2_uploader_1 = require('ng2-uploader');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [ng2_uploader_1.Ng2UploaderModule, platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, receipts_component_1.ReceiptsComponent, receipt_detail_component_1.ReceiptDetailComponent, receipt_form_component_1.ReceiptForm, receipt_pipe_1.ReceiptSearchPipe, receipt_pipe_2.OrderByPipe],
            providers: [receipt_service_1.ReceiptService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map