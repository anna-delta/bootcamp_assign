import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmanViewComponent } from './bman-view.component';

describe('BmanViewComponent', () => {
  let component: BmanViewComponent;
  let fixture: ComponentFixture<BmanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
