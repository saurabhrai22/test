import { Component} from '@angular/core';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent  {
	
	public show:boolean = false;
	public buttonName:any = 'Show';

  constructor() { }
  
  open() {
	  console.log("done");
		this.show = !this.show
		
		if(this.show)
		{
			this.buttonName = "";
		}
		else {
			this.buttonName = "";
		}
	}
	


}
