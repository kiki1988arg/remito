import { ConfigTemplate } from './../models/IConfigTemplate';
import { Company } from './../models/Icombo';
import { CompanyGroups } from '@shared/models/Icombo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogisticService {
  BaseUrl: string = environment.BaseUrl;
  private GetCompaniesBySupplierUrl = this.BaseUrl + '/Logistics/GetSupplierCompanies';
  private GetConfigTemplateUrl = this.BaseUrl + '/Logistics/GetConfigTemplate';

  constructor(private http: HttpClient) {
  }

  GetCompaniesBySupplier(): Observable<CompanyGroups[]> {
    return this.http.post<CompanyGroups[]>(this.GetCompaniesBySupplierUrl, {});
  }

  GetConfigTemplate(company: Company): Observable<ConfigTemplate> {
    return this.http.post<ConfigTemplate>(this.GetConfigTemplateUrl, company);
  }
}
