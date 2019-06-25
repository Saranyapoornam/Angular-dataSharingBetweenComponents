import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
	message:string = "Message from Children"
	viewmessage:string = "Message from view Children"
  @Input() childMessage : string;
  @Output() messageEvent =  new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendMessage(){
	 this.messageEvent.emit(this.message)
  }

}
