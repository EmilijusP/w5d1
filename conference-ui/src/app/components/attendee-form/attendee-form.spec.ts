import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeForm } from './attendee-form';

describe('AttendeeForm', () => {
  let component: AttendeeForm;
  let fixture: ComponentFixture<AttendeeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendeeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeeForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits attendeeRegistered when submitted with valid data', () => {
    vi.spyOn(component.attendeeRegistered, 'emit');
    component.attendeeForm.setValue({
      firstName: 'Alice',
      lastName: 'Smith',
      username: 'asmith',
      email: 'alice@example.com',
    });

    component.onSubmit();
    expect(component.attendeeRegistered.emit).toHaveBeenCalledWith({
      firstName: 'Alice',
      lastName: 'Smith',
      username: 'asmith',
      email: 'alice@example.com',
    });
  });
});
