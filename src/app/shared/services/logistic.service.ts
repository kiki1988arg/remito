import { ConfigTemplate } from './../models/IConfigTemplate';
import { Company } from './../models/Icombo';
import { CompanyGroups } from '@shared/models/Icombo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GetDispatchNotesRequest, GetPurchaseDocumentItemsRequest } from '../models/Requests';
import { DispatchNote } from '@shared/models/DispatchNote';
import { PurchaseDocumentItem } from '@shared/models/PurchaseDocumentItem';

@Injectable({
  providedIn: 'root'
})
export class LogisticService {
  BaseUrl: string = environment.BaseUrl;
  private GetCompaniesBySupplierUrl = this.BaseUrl + '/Logistics/GetSupplierCompanies';
  private GetConfigTemplateUrl = this.BaseUrl + '/Logistics/GetConfigTemplate';
  private GetDispatchNotesUrl = this.BaseUrl + '/Logistics/GetDispatchNotes';
  private GetPurchaseDocumentItemsUrl = this.BaseUrl + '/Logistics/GetPurchaseDocumentItems';

  constructor(private http: HttpClient) {
  }

  GetCompaniesBySupplier(): Observable<CompanyGroups[]> {
    return this.http.post<CompanyGroups[]>(this.GetCompaniesBySupplierUrl, {});
  }

  GetConfigTemplate(company: Company): Observable<ConfigTemplate> {
    return this.http.post<ConfigTemplate>(this.GetConfigTemplateUrl, company);
  }

  GetDeclaredGridData(filter: GetDispatchNotesRequest): Observable<DispatchNote[]> {
    return this.http.post<DispatchNote[]>(this.GetDispatchNotesUrl, filter);
  }

  GetPendingGridData(filter: GetPurchaseDocumentItemsRequest): Observable<PurchaseDocumentItem[]> {
    return this.http.post<PurchaseDocumentItem[]>(this.GetPurchaseDocumentItemsUrl, filter);
  }

}
