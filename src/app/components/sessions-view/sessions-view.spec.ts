import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsView } from './sessions-view';

describe('SessionsView', () => {
  let component: SessionsView;
  let fixture: ComponentFixture<SessionsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
