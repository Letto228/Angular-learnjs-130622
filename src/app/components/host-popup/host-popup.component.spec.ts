import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPopupComponent } from './host-popup.component';

describe('HostPopupComponent', () => {
  let component: HostPopupComponent;
  let fixture: ComponentFixture<HostPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
