import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskReadyComponent } from './task-ready.component';

describe('TaskReadyComponent', () => {
  let component: TaskReadyComponent;
  let fixture: ComponentFixture<TaskReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
