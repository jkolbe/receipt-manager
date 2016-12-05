import { Component } from '@angular/core';
@Component({
  selector: 'my-spa',
  template: `

  <nav class="side-nav">
  	<ul>
  		<li><a [routerLink]="['/']">Home</a></li>
  		<li><a [routerLink]="['/receipts']">Receipts</a></li>
  		<li><a [routerLink]="['/upload']">Upload</a></li>
  	</ul>
  </nav>

  <div>
  	<router-outlet></router-outlet>
  </div>
  
  `
})
export class AppComponent { }
