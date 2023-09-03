import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoComponent } from './co.component';

describe('CoComponent', () => {
  let component: CoComponent;
  let fixture: ComponentFixture<CoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoComponent]
    });
    fixture = TestBed.createComponent(CoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
