import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorPopupComponent } from './minor-popup.component';

describe('MinorPopupComponent', () => {
  let component: MinorPopupComponent;
  let fixture: ComponentFixture<MinorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinorPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
