import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladsPageComponent } from './salads-page.component';

describe('SaladsPageComponent', () => {
  let component: SaladsPageComponent;
  let fixture: ComponentFixture<SaladsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
