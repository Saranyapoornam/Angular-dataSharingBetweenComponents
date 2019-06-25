import { Component, OnInit,OnChanges,DoCheck,Input,ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-change-detectiontest',
  templateUrl: './change-detectiontest.component.html',
  styleUrls: ['./change-detectiontest.component.css'],
 changeDetection: ChangeDetectionStrategy.Default
 //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectiontestComponent implements OnInit,OnChanges,DoCheck {
  @Input() dates;
  constructor(private cd : ChangeDetectorRef) {
	//this.cd.detach();
  }

  ngOnInit() {
	 // this.cd.reattach();
  }
   ngOnChanges() {
	   //this.cd.markForCheck();
	   //this.cd.detectChanges();
  }
  ngDoCheck() {
	 //this.cd.markForCheck();
	 //this.cd.detectChanges();
  }
}
