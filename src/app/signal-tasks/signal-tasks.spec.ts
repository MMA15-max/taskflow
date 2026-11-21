import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTasks } from './signal-tasks';

describe('SignalTasks', () => {
  let component: SignalTasks;
  let fixture: ComponentFixture<SignalTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalTasks],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
