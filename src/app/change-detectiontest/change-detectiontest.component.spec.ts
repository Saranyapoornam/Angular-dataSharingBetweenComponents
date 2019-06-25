import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectiontestComponent } from './change-detectiontest.component';

describe('ChangeDetectiontestComponent', () => {
  let component: ChangeDetectiontestComponent;
  let fixture: ComponentFixture<ChangeDetectiontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectiontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectiontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
