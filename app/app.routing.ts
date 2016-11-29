import { RouterModule , Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { ReceiptsComponent }   from './receipts/receipts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'receipts', component: ReceiptsComponent },
  { path: 'receipt/:id', component: ReceiptsComponent },
  { path: 'about', component: ReceiptsComponent }
];

export const routing = RouterModule.forRoot(routes);

