import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedsecAboutComponent } from './dedsec-about.component';

describe('DedsecAboutComponent', () => {
  let component: DedsecAboutComponent;
  let fixture: ComponentFixture<DedsecAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedsecAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedsecAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
