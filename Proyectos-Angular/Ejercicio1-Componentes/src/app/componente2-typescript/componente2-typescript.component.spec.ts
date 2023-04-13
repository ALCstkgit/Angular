import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2TypescriptComponent } from './componente2-typescript.component';

describe('Componente2TypescriptComponent', () => {
  let component: Componente2TypescriptComponent;
  let fixture: ComponentFixture<Componente2TypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2TypescriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2TypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
