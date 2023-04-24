import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrePadreHijoComponent } from './padre-padre-hijo.component';

describe('PadrePadreHijoComponent', () => {
  let component: PadrePadreHijoComponent;
  let fixture: ComponentFixture<PadrePadreHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrePadreHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrePadreHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
