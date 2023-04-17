import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysUnionesEnumsComponent } from './arrays-uniones-enums.component';

describe('ArraysUnionesEnumsComponent', () => {
  let component: ArraysUnionesEnumsComponent;
  let fixture: ComponentFixture<ArraysUnionesEnumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraysUnionesEnumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraysUnionesEnumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
