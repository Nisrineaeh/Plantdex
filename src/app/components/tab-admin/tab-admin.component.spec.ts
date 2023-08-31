import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAdminComponent } from './tab-admin.component';

describe('TabAdminComponent', () => {
  let component: TabAdminComponent;
  let fixture: ComponentFixture<TabAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabAdminComponent]
    });
    fixture = TestBed.createComponent(TabAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
