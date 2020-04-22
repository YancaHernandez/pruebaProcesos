import { Injectable } from '@angular/core';
import { HttpService } from '@akaliia/shared/data-access/api';
import { Category } from '@akaliia/shared/api-interfaces';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpService) {}

  public getExistCategory(name: string) {
    return this.http
      .getEntries<Category>(`categories?name=${name.toLowerCase()}`)
      .pipe(map(data => data.length > 0));
  }

  public add(data: Category): Observable<Category> {
    return this.http.createEntry<Category>(`categories`, data);
  }

  public getAll() {
    return this.http.getEntries<Category>('categories');
  }

  public update(id: string, data: Category): Observable<Category> {
    return this.http.updateEntry<Category>('categories', id, data);
  }
}
