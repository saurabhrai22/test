import { Component,OnInit,ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
	
	public show:boolean = false;
	public buttonName:any = 'Show';
	
	constructor() {
		
	}
}
