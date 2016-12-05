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
var URL = 'http://localhost/receipt-manager/file-uploader.php';
var ReceiptForm = (function () {
    function ReceiptForm() {
        //public uploader:FileUploader = new FileUploader({url: URL});
        this.merchant = "PANDORA";
        this.date = "2016-12-05";
        this.total = 1.11;
        this.hasBaseDropZoneOver = false;
        this.options = {
            url: 'http://localhost/receipt-manager/file-uploader.php'
        };
        this.sizeLimit = 2000000;
    }
    ReceiptForm.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    };
    ReceiptForm.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ReceiptForm.prototype.beforeUpload = function (uploadingFile) {
        if (uploadingFile.size > this.sizeLimit) {
            uploadingFile.setAbort();
            alert('File is too large');
        }
    };
    ReceiptForm.prototype.submitForm = function () {
        console.log(this);
    };
    ReceiptForm = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "receipt-form",
            template: "\n\t<div class=\"container\">\n      <div class=\"content-holder\">\n    \t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<h1>Upload new receipt</h1>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<form #receiptForm=\"ngForm\" enctype=\"multipart/form-data\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"merchant\">Merchant</label>\n\t\t\t\t\t\t<input [(ngModel)] = \"merchant\" type=\"text\" class=\"form-control\" name=\"merchant\" id=\"merchant\" placeholder=\"PANDORA...\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"date\">Date</label>\n\t\t\t\t\t\t<input [(ngModel)] = \"date\" type=\"date\" class=\"form-control\" name=\"date\" id=\"date\" placeholder=\"YYYY-MM-DD\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"total\">Total</label>\n\t\t\t\t\t\t<input [(ngModel)] = \"total\" type=\"number\" step=\"0.01\" class=\"form-control\" name=\"total\" id=\"total\" placeholder=\"0.00\" required>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"image\">File input</label>\n\t\t\t\t\t\t<input  type=\"file\"\n\t\t\t\t\t\t\t\tngFileSelect\n\t\t\t\t\t\t\t\t[options]=\"options\"\n\t\t\t\t\t\t\t\t(onUpload)=\"handleUpload($event)\"\n\t\t\t\t\t\t\t\t(beforeUpload)=\"beforeUpload($event)\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button (click)=\"submitForm()\" [disabled]=\"!receiptForm.form.valid\" type=\"submit\" class=\"btn btn-default\">Submit</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\tResponse: {{ uploadFile | json }}\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ReceiptForm);
    return ReceiptForm;
}());
exports.ReceiptForm = ReceiptForm;
//# sourceMappingURL=receipt-form.component.js.map