import { Component } from '@angular/core';
@Component({
  selector: 'home',
  template: `
  	<div class="main">
  		<p>{{intro}}</p>
  		<div class="ink-drop"></div>
  	</div>
  	`
})
export class HomeComponent { 
	intro:string = "It's good to have money and the things that money can buy, But it's good too, to checkup once in a while that you haven't lost the things that money can't buy.";
}