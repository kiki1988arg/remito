import { BaseComponent } from '@create/base/base.component';
import { Component, OnInit, Injector } from '@angular/core';
import { Company, CompanyGroups } from '@shared/models/Icombo';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { StepperComponent } from '../stepper/stepper.component';

export const _filter = (opt: Company[], value: string): Company[] => {
  const filterValue = typeof value === 'string' ? value.toLowerCase() : '';

  return opt.filter(item => item.Description.toLowerCase().includes(filterValue));
};
@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.scss']
})
export class SelectCompanyComponent extends BaseComponent implements OnInit {

  CompanyGroupOptions: Observable<CompanyGroups[]>;
  companyGroups: CompanyGroups[];

  constructor(
    injectorObj: Injector) {
    super(injectorObj);
  }

  ngOnInit() {
    super.ngOnInit();

    // this.logisticService.GetCompaniesBySupplier().subscribe(data => {
      this.companyGroups = data;
      // tslint:disable-next-line:no-non-null-assertion
      this.CompanyGroupOptions = this.company!.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterGroup(value))
        );
    // });
  }
  private _filterGroup(value): CompanyGroups[] {
    if (value) {
      return this.companyGroups
        .map(group => ({ SapName: group.SapName, Companies: _filter(group.Companies, value) }))
        .filter(group => group.Companies.length > 0);
    }
    return this.companyGroups;
  }
  displayFn(comp: any): string {
    return comp ? comp.Description : '';
  }

  onSelect(company: any) {

    this.logisticService.GetConfigTemplate(company.option.value).subscribe(data => {
      this.globalForm.Templates = data;
    });

    this.NextStep();
  }
}


export const data = [
  {
    'SapName': 'TENARIS',
    'Companies': [
      {
        'ID': 'SIAR',
        'Description': 'Exiros Argentina SA',
        'Holding': 'SAPTEN',
        'Country': 'AR'
      },
      {
        'ID': 'MM',
        'Description': 'Metalmecánica SA',
        'Holding': 'SAPTEN',
        'Country': 'AR'
      },
      {
        'ID': 'TEOS',
        'Description': 'OILFIELD SERVICES S.A.',
        'Holding': 'SAPTEN',
        'Country': 'AR'
      },
      {
        'ID': 'OPEL',
        'Description': 'Operadora Eléctrica SA',
        'Holding': 'SAPTEN',
        'Country': 'AR'
      },
      {
        'ID': 'SCRA',
        'Description': 'Scrapservice SA',
        'Holding': 'SAPTEN',
        'Country': 'AR'
      },
      {
        'ID': 'SIAT',
        'Description': 'Siat SA',
        'Holding': 'SAPTEN',
        'Country': 'AR'
      },
      {
        'ID': 'DS1',
        'Description': 'SIDERCA SAIC',
        'Holding': 'SAPTEN',
        'Country': 'AR'
      },
      {
        'ID': 'SIPA',
        'Description': 'Sipsa',
        'Holding': 'SAPTEN',
        'Country': 'AR'
      },
      {
        'ID': 'ISTS',
        'Description': 'Tenaris Ingeniería de Arg (ISTS)',
        'Holding': 'SAPTEN',
        'Country': 'AR'
      }
    ]
  },
  {
    'SapName': 'TERNIUM',
    'Companies': [
      {
        'ID': 'TA02',
        'Description': 'Nueva Impeco',
        'Holding': 'SAPSID',
        'Country': 'AR'
      },
      {
        'ID': 'TA01',
        'Description': 'Ternium Argentina S.A.',
        'Holding': 'SAPSID',
        'Country': 'AR'
      }
    ]
  }
];
