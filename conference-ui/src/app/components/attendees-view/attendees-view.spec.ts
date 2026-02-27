import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeesView } from './attendees-view';

describe('AttendeesView', () => {
  let component: AttendeesView;
  let fixture: ComponentFixture<AttendeesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendeesView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeesView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
