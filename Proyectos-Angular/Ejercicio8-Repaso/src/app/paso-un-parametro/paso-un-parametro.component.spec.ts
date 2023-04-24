import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoUnParametroComponent } from './paso-un-parametro.component';

describe('PasoUnParametroComponent', () => {
  let component: PasoUnParametroComponent;
  let fixture: ComponentFixture<PasoUnParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasoUnParametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasoUnParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
