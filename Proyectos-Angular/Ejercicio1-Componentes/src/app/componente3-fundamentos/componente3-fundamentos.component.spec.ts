import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente3FundamentosComponent } from './componente3-fundamentos.component';

describe('Componente3FundamentosComponent', () => {
  let component: Componente3FundamentosComponent;
  let fixture: ComponentFixture<Componente3FundamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente3FundamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente3FundamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
