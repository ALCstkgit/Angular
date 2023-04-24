import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeUnParametroComponent } from './recibe-un-parametro.component';

describe('RecibeUnParametroComponent', () => {
  let component: RecibeUnParametroComponent;
  let fixture: ComponentFixture<RecibeUnParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeUnParametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibeUnParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
