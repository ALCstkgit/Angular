import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijoPadreComponent } from './padre-hijo-padre.component';

describe('PadreHijoPadreComponent', () => {
  let component: PadreHijoPadreComponent;
  let fixture: ComponentFixture<PadreHijoPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreHijoPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreHijoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
