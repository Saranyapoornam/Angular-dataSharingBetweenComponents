import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  constructor(private data: DataService) { }
	newmessage : string;
  ngOnInit() {
	  this.data.currentMessage.subscribe(message => this.newmessage = message)
  }
  newMessage() {
    this.data.changeMessage("Hello message from Sibling")
  }

}
