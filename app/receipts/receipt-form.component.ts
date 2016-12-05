import { Component } from '@angular/core';

const URL = 'http://localhost/receipt-manager/file-uploader.php';

@Component({
	moduleId: module.id,
	selector: "receipt-form",
	template: `
	<div class="container">
      <div class="content-holder">
    	<div class="row">
			<div class="col-xs-12">
				<h1>Upload new receipt</h1>
			</div>
			<div class="col-xs-12">
				<form #receiptForm="ngForm" enctype="multipart/form-data">
					<div class="form-group">
						<label for="merchant">Merchant</label>
						<input [(ngModel)] = "merchant" type="text" class="form-control" name="merchant" id="merchant" placeholder="PANDORA..." required>
					</div>
					<div class="form-group">
						<label for="date">Date</label>
						<input [(ngModel)] = "date" type="date" class="form-control" name="date" id="date" placeholder="YYYY-MM-DD" required>
					</div>
					<div class="form-group">
						<label for="total">Total</label>
						<input [(ngModel)] = "total" type="number" step="0.01" class="form-control" name="total" id="total" placeholder="0.00" required>
					</div>

					<div class="form-group">
						<label for="image">File input</label>
						<input  type="file"
								ngFileSelect
								[options]="options"
								(onUpload)="handleUpload($event)"
								(beforeUpload)="beforeUpload($event)">
					</div>

					<button (click)="submitForm()" [disabled]="!receiptForm.form.valid" type="submit" class="btn btn-default">Submit</button>
				</form>
			</div>

			<div class="col-xs-12">
				Response: {{ uploadFile | json }}
			</div>

		</div>
	</div>
	`
})

export class ReceiptForm {

	//public uploader:FileUploader = new FileUploader({url: URL});

	merchant: string = "PANDORA";
	date: string = "2016-12-05";
	total: number = 1.11;
	image;

	uploadFile: any;
  	hasBaseDropZoneOver: boolean = false;
  	options: Object = {
    	url: 'http://localhost/receipt-manager/file-uploader.php'
  	};
  	sizeLimit = 2000000;


	handleUpload(data): void {
		if (data && data.response) {
			data = JSON.parse(data.response);
			this.uploadFile = data;
		}
	}

	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	beforeUpload(uploadingFile): void {
		if (uploadingFile.size > this.sizeLimit) {
			uploadingFile.setAbort();
			alert('File is too large');
		}
	}

	submitForm() {
		console.log(this);
	}

}