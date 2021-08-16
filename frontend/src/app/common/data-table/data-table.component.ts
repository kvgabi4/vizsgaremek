import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T extends {[propname: string]: any}> implements OnInit {

  @Input() tableColumns: ITableColumn[] = [];
  @Input() list$: Observable<T[]> | null = null;
  @Input() filterKeys: string[][] = [];
  @Input() filterKey: string[] = [];
  @Input() entity: string = '';
  @Input() color: string[] = [];

  @Output() selectOne: EventEmitter<T> = new EventEmitter<T>();
  @Output() deleteOne: EventEmitter<T> = new EventEmitter<T>();

  phrase: string = '';

  columnHead: string = '';
  direction: boolean = false;
  sortColumn: string = '';

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  onSelect(entity: T): void {
    this.selectOne.emit(entity);
  }

  onDelete(entity: T): void {
    this.deleteOne.emit(entity);
  }

  currentHead: string = 'id';

  onColumnSelect(columnHead: string): void {
    this.sortColumn = columnHead;
    this.direction = !this.direction;
  }
}
