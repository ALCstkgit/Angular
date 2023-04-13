import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1QueenComponent } from './componente1-queen.component';

describe('Componente1QueenComponent', () => {
  let component: Componente1QueenComponent;
  let fixture: ComponentFixture<Componente1QueenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1QueenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1QueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
