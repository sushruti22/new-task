import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabywootwearComponent } from './babywootwear.component';

describe('BabywootwearComponent', () => {
  let component: BabywootwearComponent;
  let fixture: ComponentFixture<BabywootwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabywootwearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabywootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
