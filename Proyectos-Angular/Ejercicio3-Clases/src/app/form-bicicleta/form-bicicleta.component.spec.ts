import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBicicletaComponent } from './form-bicicleta.component';

describe('FormBicicletaComponent', () => {
  let component: FormBicicletaComponent;
  let fixture: ComponentFixture<FormBicicletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBicicletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
