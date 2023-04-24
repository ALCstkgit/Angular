import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoHijoPadreComponent } from './hijo-hijo-padre.component';

describe('HijoHijoPadreComponent', () => {
  let component: HijoHijoPadreComponent;
  let fixture: ComponentFixture<HijoHijoPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoHijoPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoHijoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
