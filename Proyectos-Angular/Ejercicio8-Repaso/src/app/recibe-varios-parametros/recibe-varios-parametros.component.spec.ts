import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeVariosParametrosComponent } from './recibe-varios-parametros.component';

describe('RecibeVariosParametrosComponent', () => {
  let component: RecibeVariosParametrosComponent;
  let fixture: ComponentFixture<RecibeVariosParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeVariosParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibeVariosParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
