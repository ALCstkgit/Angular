import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoVariosParametrosComponent } from './paso-varios-parametros.component';

describe('PasoVariosParametrosComponent', () => {
  let component: PasoVariosParametrosComponent;
  let fixture: ComponentFixture<PasoVariosParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasoVariosParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasoVariosParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
