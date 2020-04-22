import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ContentChild,
  TemplateRef,
  Input
} from '@angular/core';
import { DecimalPipe } from '@angular/common';

import {
  SortEvent,
  SortableDirective,
  SortDirection
} from './sortable.directive';
import { State } from './state';

import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { tap, debounceTime, switchMap, delay } from 'rxjs/operators';

interface SearchResult {
  tables: [];
  total: number;
}

@Component({
  selector: 'akaliia-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [DecimalPipe]
})
export class DataTableComponent implements OnInit {
  @ContentChild(TemplateRef) parentTemplate: any;

  _tableData: any;
  @Input()
  set tableData(tableData) {
    this._tableData = tableData;
  }

  get tableData() {
    return this._tableData;
  }

  @Input() matches: (arg0: any, arg1: string, arg2: DecimalPipe) => any;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  /**
   * service
   */
  _loading$ = new BehaviorSubject<boolean>(true);
  _search$ = new Subject<void>();
  _tables$ = new BehaviorSubject<[]>([]);
  _total$ = new BehaviorSubject<number>(0);

  _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
    startIndex: 1,
    endIndex: 10,
    totalRecords: 0
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe(result => {
        this._tables$.next(result.tables);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  ngOnInit() {}

  toggle = (event: SortEvent) => {
    this.onSort(event);
  };

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      console.log(header);
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.sortColumn = column;
    this.sortDirection = direction;
  }

  /**
   * Service
   */

  /**
   * Returns the value
   */
  get tables$() {
    return this._tables$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  get startIndex() {
    return this._state.startIndex;
  }
  get endIndex() {
    return this._state.endIndex;
  }
  get totalRecords() {
    return this._state.totalRecords;
  }

  /**
   * set the value
   */
  set page(page: number) {
    this._set({ page });
  }

  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }

  set startIndex(startIndex: number) {
    this._set({ startIndex });
  }

  set endIndex(endIndex: number) {
    this._set({ endIndex });
  }

  set totalRecords(totalRecords: number) {
    this._set({ totalRecords });
  }

  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }

  set sortColumn(sortColumn: string) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  /**
   * Search Method
   */
  private _search(): Observable<SearchResult> {
    const {
      sortColumn,
      sortDirection,
      pageSize,
      page,
      searchTerm
    } = this._state;

    // 1. sort
    let tables = this.sort(this.tableData, sortColumn, sortDirection);

    // 2. filter
    tables = tables.filter((table: any) =>
      this.matches(table, searchTerm, this.pipe)
    );

    const total = tables.length;

    // 3. paginate
    this.totalRecords = tables.length;
    this._state.startIndex = (page - 1) * this.pageSize;
    this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    tables = tables.slice(this._state.startIndex, this._state.endIndex);

    return of({ tables, total });
  }

  /**
   * Sort the table data
   * @param tabless Table field value
   * @param column Fetch the column
   * @param direction Sort direction Ascending or Descending
   */
  sort(tables: any, column: string, direction: string) {
    if (direction === '') {
      return tables;
    } else {
      return [...tables].sort((a, b) => {
        const res = this.compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  compare(v1: number, v2: number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }
}
