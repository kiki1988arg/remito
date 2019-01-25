import { environment } from './../../../environments/environment';
import { CompanyGroups } from '@shared/models/Icombo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PurchaseDocumentService {
  BaseUrl: string = environment.BaseUrl;
  private GetCompaniesBySupplierUrl = this.BaseUrl + '/PurchaseDocument/GetCompaniesBySupplier';

  constructor(private http: HttpClient) {
  }

  GetCompaniesBySupplier(): Observable<CompanyGroups[]> {
    return this.http.post<CompanyGroups[]>(this.GetCompaniesBySupplierUrl, {});
  }
}
