import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyswatchComponent } from './boyswatch.component';

describe('BoyswatchComponent', () => {
  let component: BoyswatchComponent;
  let fixture: ComponentFixture<BoyswatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoyswatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyswatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
