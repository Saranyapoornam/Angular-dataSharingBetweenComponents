import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {

  constructor() { 
  var str ="example";
  var str2 = str.slice(1,3);
  console.log(str,str2);
  var arr = [1,2];
  arr.push(3);
   console.log(arr);
  }
  dates = [new Date().getTime()];

  ngOnInit() {
  }
  click(){
	 this.dates.push(new Date().getTime()); 
	 //this.dates = this.dates.concat(new Date().getTime()); 
  }

}
