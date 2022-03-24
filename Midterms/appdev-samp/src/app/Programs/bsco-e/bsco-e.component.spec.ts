import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSCoEComponent } from './bsco-e.component';

describe('BSCoEComponent', () => {
  let component: BSCoEComponent;
  let fixture: ComponentFixture<BSCoEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BSCoEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BSCoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
