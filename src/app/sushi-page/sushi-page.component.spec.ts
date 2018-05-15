import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiPageComponent } from './sushi-page.component';

describe('SushiPageComponent', () => {
  let component: SushiPageComponent;
  let fixture: ComponentFixture<SushiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
