import { Component, OnInit,ViewChild, AfterContentInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { DataService } from "../data.service";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterContentInit   {
	@ViewChild(ChildComponent,"data") child;
   viewChildmessage:string;
   parentMessage = "message from parent";
   message:string;
   newmessage:string;
  constructor(private data: DataService) { }

  ngOnInit() {
	  this.data.currentMessage.subscribe(message => this.newmessage = message)
  }
  ngAfterContentInit() {
    this.viewChildmessage = this.child.viewmessage;
  }
  receiveMessage($event){
	  this.message = $event;
  }
  

  
}
