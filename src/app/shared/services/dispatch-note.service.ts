import { CompanyGroups } from '@shared/models/Icombo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DispatchNoteService {
  BaseUrl: string = environment.BaseUrl;
  private GetCompaniesBySupplierUrl = this.BaseUrl + '/DispatchNote/GetCompaniesBySupplier';

  constructor(private http: HttpClient) {
  }

  GetCompaniesBySupplier(): Observable<CompanyGroups[]> {
    return this.http.post<CompanyGroups[]>(this.GetCompaniesBySupplierUrl, {});
  }
}
