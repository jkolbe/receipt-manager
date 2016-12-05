import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }		from '@angular/forms';
import { HttpModule }		from '@angular/http';

import { ReceiptService } 		from './receipts/receipt.service';
import { ReceiptSearchPipe } 	from './receipts/receipt.pipe';
import { OrderByPipe } 	from './receipts/receipt.pipe';

import { AppComponent }   from './app.component';

import { HomeComponent }   from './home/home.component';
import { ReceiptsComponent }   from './receipts/receipts.component';
import { ReceiptDetailComponent }   from './receipts/receipt-detail.component';
import { ReceiptForm }   from './receipts/receipt-form.component';

import { Ng2UploaderModule } from 'ng2-uploader';

import { routing } from './app.routing';

@NgModule({
  imports:      [ Ng2UploaderModule, BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, HomeComponent, ReceiptsComponent, ReceiptDetailComponent, ReceiptForm, ReceiptSearchPipe, OrderByPipe ],
  providers: 	[ ReceiptService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
