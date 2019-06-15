import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViiewComponent } from './viiew.component';

describe('ViiewComponent', () => {
  let component: ViiewComponent;
  let fixture: ComponentFixture<ViiewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViiewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
