import { TaskModel } from './../task.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListTaskDataSource} from './list-task-datasource';

@Component({
  selector: 'app-bla-bla-bla',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TaskModel>;
  dataSource: ListTaskDataSource;



  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'description', 'owner'];

  constructor() {
    this.dataSource = new ListTaskDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
