import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisMovementComponent } from './axis-movement.component';

describe('AxisMovementComponent', () => {
  let component: AxisMovementComponent;
  let fixture: ComponentFixture<AxisMovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxisMovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxisMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
