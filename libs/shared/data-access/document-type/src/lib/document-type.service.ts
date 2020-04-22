import { Injectable } from '@angular/core';
import { HttpService } from '@akaliia/shared/data-access/api';
import { DocumentType } from '@akaliia/shared/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
  constructor(private http: HttpService) {}

  getDocuments() {
    return this.http.getEntries<DocumentType>('document-types');
  }

  get(id: string) {
    return this.http.getEntry<DocumentType>('document-types', id);
  }
}
