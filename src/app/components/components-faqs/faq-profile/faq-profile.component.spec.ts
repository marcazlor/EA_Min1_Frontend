import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqProfileComponent } from './faq-profile.component';

describe('FaqProfileComponent', () => {
  let component: FaqProfileComponent;
  let fixture: ComponentFixture<FaqProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
