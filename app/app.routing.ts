import { RouterModule , Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { ReceiptsComponent }   from './receipts/receipts.component';
import { ReceiptDetailComponent }   from './receipts/receipt-detail.component';
import { ReceiptForm }   from './receipts/receipt-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'receipts', component: ReceiptsComponent },
  { path: 'detail/:id', component: ReceiptDetailComponent },
  { path: 'upload', component: ReceiptForm }
];

export const routing = RouterModule.forRoot(routes);

