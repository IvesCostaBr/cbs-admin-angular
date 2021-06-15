import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { ListTaskComponent } from './list-task.component';

describe('ListTaskComponent', () => {
  let component: ListTaskComponent;
  let fixture: ComponentFixture<ListTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTaskComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
