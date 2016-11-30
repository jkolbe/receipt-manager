import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }		from '@angular/forms';
import { HttpModule }		from '@angular/http';

import { ReceiptService } 		from './receipts/receipt.service';

import { AppComponent }   from './app.component';

import { HomeComponent }   from './home/home.component';
import { ReceiptsComponent }   from './receipts/receipts.component';
import { ReceiptDetailComponent }   from './receipts/receipt-detail.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, HomeComponent, ReceiptsComponent, ReceiptDetailComponent ],
  providers: 	[ ReceiptService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
