import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPadreHijoComponent } from './hijo-padre-hijo.component';

describe('HijoPadreHijoComponent', () => {
  let component: HijoPadreHijoComponent;
  let fixture: ComponentFixture<HijoPadreHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPadreHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoPadreHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
