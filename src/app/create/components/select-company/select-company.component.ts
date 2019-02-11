import { BaseComponent } from '@create/base/base.component';
import { Component, OnInit, Input, Injector } from '@angular/core';
import { Company, CompanyGroups } from '@shared/models/Icombo';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export const _filter = (opt: Company[], value: string): Company[] => {
  const filterValue = typeof value === 'string' ? value.toLowerCase() : '';

  return opt.filter(item => item.ViewValue.toLowerCase().includes(filterValue));
};
@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.scss']
})
export class SelectCompanyComponent extends BaseComponent implements OnInit {

  CompanyGroupOptions: Observable<CompanyGroups[]>;
  companyGroups: CompanyGroups[];
  @Input() stepper: any;

  ngOnInit() {
    super.ngOnInit();

    this.logisticService.GetCompaniesBySupplier().subscribe(data => {
      this.companyGroups = data;
      // tslint:disable-next-line:no-non-null-assertion
      this.CompanyGroupOptions = this.globalForm.inputs.get('Company')!.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterGroup(value))
        );
    });
  }
  private _filterGroup(value: string): CompanyGroups[] {
    if (value) {
      return this.companyGroups
        .map(group => ({ SapName: group.SapName, Companies: _filter(group.Companies, value) }))
        .filter(group => group.Companies.length > 0);
    }
    return this.companyGroups;
  }
  displayFn(comp: any): string {
    return comp ? comp.ViewValue : '';
  }

  onSelect(company: any) {
    this.logisticService.GetConfigTemplate(company.option.value).subscribe(data => {
      this.globalForm.Templates = data;
      this.deliveryPlace.setValue('ind');
      this.stepper.selectedIndex = 3;
    });
  }
}
