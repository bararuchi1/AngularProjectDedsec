import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedsecHomeComponent } from './dedsec-home.component';

describe('DedsecHomeComponent', () => {
  let component: DedsecHomeComponent;
  let fixture: ComponentFixture<DedsecHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedsecHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedsecHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
