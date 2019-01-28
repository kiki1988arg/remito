import { DispatchNoteService } from '@shared/services/dispatch-note.service';
import { Component, OnInit } from '@angular/core';
import { Company, CompanyGroups } from '@shared/models/Icombo';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { GlobalFormService } from '@shared/services/global-form.service';
import { MatStepper } from '@angular/material/stepper';

export const _filter = (opt: Company[], value: string): Company[] => {
  const filterValue = typeof value === 'string' ? value.toLowerCase() : '';

  return opt.filter(item => item.ViewValue.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-choose-company',
  templateUrl: './choose-company.component.html',
  styleUrls: ['./choose-company.component.scss']
})
export class ChooseCompanyComponent implements OnInit {

  fgroup: FormGroup;
  CompanyGroupOptions: Observable<CompanyGroups[]>;
  companyGroups: CompanyGroups[];
  constructor(protected fb: FormBuilder,
    protected DNS: DispatchNoteService,
    private GFS: GlobalFormService) {
                                                       GFS.value.subscribe(
      e => {
        this.fgroup = e.input;
      });
  }

  ngOnInit() {
    // this.companyGroups = asdf;
    // this.DNS.GetCompaniesBySupplier().subscribe(data => {
    this.companyGroups = asdf;
    // tslint:disable-next-line:no-non-null-assertion
    this.CompanyGroupOptions = this.fgroup.get('Company')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    // });

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

  onSelect(e: any) {
     console.log(e);

  }
}

// tslint:disable-next-line:max-line-length
const asdf: any = [{ 'SapName': 'TENARIS', 'Companies': [{ 'Value': 'ALGO', 'ViewValue': 'Algoma Tubes Inc', 'Code': 'SAPTEN' }, { 'Value': 'TAGN', 'ViewValue': 'Autoabastecedora S.A.', 'Code': 'SAPTEN' }, { 'Value': 'COND', 'ViewValue': 'Colmena Conduit Ltda', 'Code': 'SAPTEN' }, { 'Value': 'COIN', 'ViewValue': 'Confab Industrial SA', 'Code': 'SAPTEN' }, { 'Value': 'COML', 'ViewValue': 'Confab Montagens Ltda', 'Code': 'SAPTEN' }, { 'Value': 'COSE', 'ViewValue': 'CONFAB SERVICIOS TUBULARES LTDA', 'Code': 'SAPTEN' }, { 'Value': 'IT09', 'ViewValue': 'Dalmine SPA', 'Code': 'SAPTEN' }, { 'Value': 'DONA', 'ViewValue': 'Donasid', 'Code': 'SAPTEN' }, { 'Value': 'SIAR', 'ViewValue': 'Exiros Argentina SA', 'Code': 'SAPTEN' }, { 'Value': 'EXBR', 'ViewValue': 'Exiros Brasil', 'Code': 'SAPTEN' }, { 'Value': 'EXIT', 'ViewValue': 'Exiros Italia SRL', 'Code': 'SAPTEN' }, { 'Value': 'EXMX', 'ViewValue': 'Exiros Mexico SA de CV', 'Code': 'SAPTEN' }, { 'Value': 'FAST', 'ViewValue': 'F.A.S.T. S.R.L.', 'Code': 'SAPTEN' }, { 'Value': 'FUNC', 'ViewValue': 'Fundacion Campana', 'Code': 'SAPTEN' }, { 'Value': 'HYCP', 'ViewValue': 'Hydril Canadian Company Limited PARTNERSHIP', 'Code': 'SAPTEN' }, { 'Value': 'HYCO', 'ViewValue': 'Hydril Company', 'Code': 'SAPTEN' }, { 'Value': 'HYSC', 'ViewValue': 'Hydril SA de CV', 'Code': 'SAPTEN' }, { 'Value': 'KPTL', 'ViewValue': 'Kazakhstan Pipe Threaders', 'Code': 'SAPTEN' }, { 'Value': 'MTLP', 'ViewValue': 'MAVERICK TUBE CORPORATION', 'Code': 'SAPTEN' }, { 'Value': 'MM', 'ViewValue': 'Metalmecánica SA', 'Code': 'SAPTEN' }, { 'Value': 'NKK', 'ViewValue': 'NKKTUBES', 'Code': 'SAPTEN' }, { 'Value': 'TEOS', 'ViewValue': 'OILFIELD SERVICES S.A.', 'Code': 'SAPTEN' }, { 'Value': 'MTCO', 'ViewValue': 'OLD - MTCO', 'Code': 'SAPTEN' }, { 'Value': 'OPEL', 'ViewValue': 'Operadora Eléctrica SA', 'Code': 'SAPTEN' }, { 'Value': 'PCNL', 'ViewValue': 'Pipe Coaters Nigeria Ltd', 'Code': 'SAPTEN' }, { 'Value': 'PRUD', 'ViewValue': 'PRUDENTIAL STEEL ULC', 'Code': 'SAPTEN' }, { 'Value': 'HYIN', 'ViewValue': 'PT Hydril Indonesia-Batam', 'Code': 'SAPTEN' }, { 'Value': 'COMA', 'ViewValue': 'Republic Conduit Manufact', 'Code': 'SAPTEN' }, { 'Value': 'SCRA', 'ViewValue': 'Scrapservice SA', 'Code': 'SAPTEN' }, { 'Value': 'SPIJ', 'ViewValue': 'Seamless Pipe Indon. Jaya', 'Code': 'SAPTEN' }, { 'Value': 'SEIN', 'ViewValue': 'SERINPRO', 'Code': 'SAPTEN' }, { 'Value': 'SEGE', 'ViewValue': 'Serv. Generales Tenaris', 'Code': 'SAPTEN' }, { 'Value': 'SIAT', 'ViewValue': 'Siat SA', 'Code': 'SAPTEN' }, { 'Value': 'DS1', 'ViewValue': 'SIDERCA SAIC', 'Code': 'SAPTEN' }, { 'Value': 'SILN', 'ViewValue': 'Silcotub', 'Code': 'SAPTEN' }, { 'Value': 'SIPA', 'ViewValue': 'Sipsa', 'Code': 'SAPTEN' }, { 'Value': 'TEVE', 'ViewValue': 'Socominter SA', 'Code': 'SAPTEN' }, { 'Value': 'TMDM', 'ViewValue': 'Tamdel SA de CV', 'Code': 'SAPTEN' }, { 'Value': 'TMAC', 'ViewValue': 'Tamsa AC', 'Code': 'SAPTEN' }, { 'Value': 'TMSR', 'ViewValue': 'Tamser SA de CV', 'Code': 'SAPTEN' }, { 'Value': 'TDPN', 'ViewValue': 'Technical Drilling and Prod', 'Code': 'SAPTEN' }, { 'Value': 'TECP', 'ViewValue': 'TECPETROL S.A.', 'Code': 'SAPTEN' }, { 'Value': 'TPUR', 'ViewValue': 'Tempur S.A.', 'Code': 'SAPTEN' }, { 'Value': 'TBAY', 'ViewValue': 'Tenaris Bay City, Inc.', 'Code': 'SAPTEN' }, { 'Value': 'TCHB', 'ViewValue': 'Tenaris C Hastes De Bomb', 'Code': 'SAPTEN' }, { 'Value': 'COSR', 'ViewValue': 'Tenaris Coating do Brasil', 'Code': 'SAPTEN' }, { 'Value': 'TECO', 'ViewValue': 'Tenaris Coiled Tubes LLC', 'Code': 'SAPTEN' }, { 'Value': 'TCBV', 'ViewValue': 'TENARIS CONNECTIONS BV', 'Code': 'SAPTEN' }, { 'Value': 'TECU', 'ViewValue': 'Tenaris Ecuador S.A.', 'Code': 'SAPTEN' }, { 'Value': 'TFSU', 'ViewValue': 'Tenaris Financial Service Uruguay', 'Code': 'SAPTEN' }, { 'Value': 'RIGA', 'ViewValue': 'Tenaris Fittings SA de CV', 'Code': 'SAPTEN' }, { 'Value': 'TENG', 'ViewValue': 'Tenaris Gbl Serv. Nigeria', 'Code': 'SAPTEN' }, { 'Value': 'TGSU', 'ViewValue': 'Tenaris Global Serv SA', 'Code': 'SAPTEN' }, { 'Value': 'TEAZ', 'ViewValue': 'Tenaris Global Servic.LLP', 'Code': 'SAPTEN' }, { 'Value': 'TEUK', 'ViewValue': 'TENARIS GLOBAL SERVICES (UK) LTD.', 'Code': 'SAPTEN' }, { 'Value': 'TEHI', 'ViewValue': 'Tenaris Hickman LP', 'Code': 'SAPTEN' }, { 'Value': 'ISTS', 'ViewValue': 'Tenaris Ingeniería de Arg (ISTS)', 'Code': 'SAPTEN' }, { 'Value': 'TAUT', 'ViewValue': 'Tenaris Ingeniería México', 'Code': 'SAPTEN' }, { 'Value': 'EXTR', 'ViewValue': 'Tenaris Ingeniería S.A. (EXTR)', 'Code': 'SAPTEN' }, { 'Value': 'TECH', 'ViewValue': 'Tenaris Qingdao Sp Ltd', 'Code': 'SAPTEN' }, { 'Value': 'TRUS', 'ViewValue': 'Tenaris Rods (U.S.A.) Inc', 'Code': 'SAPTEN' }, { 'Value': 'TESA', 'ViewValue': 'TENARIS SAUDI ARABIA LMTD', 'Code': 'SAPTEN' }, { 'Value': 'TESR', 'ViewValue': 'Tenaris Solutions East SR', 'Code': 'SAPTEN' }, { 'Value': 'TESM', 'ViewValue': 'Tenaris Solutions México', 'Code': 'SAPTEN' }, { 'Value': 'TESC', 'ViewValue': 'Tenaris Supply Chain Serve', 'Code': 'SAPTEN' }, { 'Value': 'TSYS', 'ViewValue': 'Tenaris Systems S.A.', 'Code': 'SAPTEN' }, { 'Value': 'TTAR', 'ViewValue': 'Tenaris Testing and Technical Solutions Argentina', 'Code': 'SAPTEN' }, { 'Value': 'TUCA', 'ViewValue': 'Tenaris Tubocaribe Ltda', 'Code': 'SAPTEN' }, { 'Value': 'TTSA', 'ViewValue': 'Testing and Technical Solutions SA de CV', 'Code': 'SAPTEN' }, { 'Value': 'TEVI', 'ViewValue': 'TEVI - Socominter S.A.', 'Code': 'SAPTEN' }, { 'Value': 'TECA', 'ViewValue': 'TGS Canada Inc', 'Code': 'SAPTEN' }, { 'Value': 'SOCH', 'ViewValue': 'TGS Chile Limitada', 'Code': 'SAPTEN' }, { 'Value': 'TEBO', 'ViewValue': 'TGS DE BOLIVIA S.R.L.', 'Code': 'SAPTEN' }, { 'Value': 'TEDI', 'ViewValue': 'TGS Denmark', 'Code': 'SAPTEN' }, { 'Value': 'TEEC', 'ViewValue': 'TGS Ecuador', 'Code': 'SAPTEN' }, { 'Value': 'TEKO', 'ViewValue': 'TGS Korea', 'Code': 'SAPTEN' }, { 'Value': 'TENO', 'ViewValue': 'TGS Norway AS', 'Code': 'SAPTEN' }, { 'Value': 'SCOL', 'ViewValue': 'TGS Panama - Suc Col', 'Code': 'SAPTEN' }, { 'Value': 'TEPE', 'ViewValue': 'TGS Perú S.A.C.', 'Code': 'SAPTEN' }, { 'Value': 'TEEG', 'ViewValue': 'TGS SAE', 'Code': 'SAPTEN' }, { 'Value': 'TGST', 'ViewValue': 'TGS Thailand Ltd', 'Code': 'SAPTEN' }, { 'Value': 'TEUS', 'ViewValue': 'TGS USA Corporation', 'Code': 'SAPTEN' }, { 'Value': 'TESB', 'ViewValue': 'TQSP - BEIJING BRANCH', 'Code': 'SAPTEN' }, { 'Value': 'TSAR', 'ViewValue': 'TSYS S.A.- SUC. ARGENTINA ', 'Code': 'SAPTEN' }, { 'Value': 'TAMS', 'ViewValue': 'Tubos De Acero De Mexico', 'Code': 'SAPTEN' }] }, { 'SapName': 'TECHINT', 'Companies': [{ 'Value': 'PE07', 'ViewValue': 'Cons Const y Mont - CCM', 'Code': 'SAPTEIC' }, { 'Value': 'EC14', 'ViewValue': 'CONS.PRES.PETROLERAS(CPP) ', 'Code': 'SAPTEIC' }, { 'Value': '03MX', 'ViewValue': 'Constructora Mexicana Electromecánica y de Instrumentación S.A. de C.V.', 'Code': 'SAPTEIC' }, { 'Value': 'UY09', 'ViewValue': 'EC BELFI SUC URUGUAYA SA Y TECHINT (UY9)', 'Code': 'SAPTEIC' }, { 'Value': '11MX', 'ViewValue': 'MEXCARBON', 'Code': 'SAPTEIC' }, { 'Value': 'AR40', 'ViewValue': 'Panedile-Siemens-Tesur-UT', 'Code': 'SAPTEIC' }, { 'Value': 'AR37', 'ViewValue': 'Panedile-Tesur - UTE ADIF -LP01', 'Code': 'SAPTEIC' }, { 'Value': 'AR39', 'ViewValue': 'Panedile-Tesur-UTE LP49', 'Code': 'SAPTEIC' }, { 'Value': 'MX03', 'ViewValue': 'Sidernet Mexicana S.A. (MX03)', 'Code': 'SAPTEIC' }, { 'Value': 'AR10', 'ViewValue': 'Sidernet S.A. (AR10)', 'Code': 'SAPTEIC' }, { 'Value': '01US', 'ViewValue': 'Tech. Techn. \u0026 Co. Serv.', 'Code': 'SAPTEIC' }, { 'Value': 'BS02', 'ViewValue': 'Techint Bahamas', 'Code': 'SAPTEIC' }, { 'Value': 'BO02', 'ViewValue': 'Techint Bolivia', 'Code': 'SAPTEIC' }, { 'Value': 'CL02', 'ViewValue': 'Techint Chile S.A. (CL02)', 'Code': 'SAPTEIC' }, { 'Value': 'AR02', 'ViewValue': 'Techint Cía Técnica Internac. SACI (ARG)', 'Code': 'SAPTEIC' }, { 'Value': 'UY05', 'ViewValue': 'Techint Cía Técnica Internac. SACI (URU)', 'Code': 'SAPTEIC' }, { 'Value': 'UY10', 'ViewValue': 'Techint E\u0026C S.A.', 'Code': 'SAPTEIC' }, { 'Value': 'AR17', 'ViewValue': 'TECHINT INVERSIONES SAIYF', 'Code': 'SAPTEIC' }, { 'Value': 'PE02', 'ViewValue': 'Techint S.A.C. (Perú)', 'Code': 'SAPTEIC' }, { 'Value': '01MX', 'ViewValue': 'Techint SA de CV (México)', 'Code': 'SAPTEIC' }, { 'Value': 'BR05', 'ViewValue': 'Techint SACI (TEBRA)', 'Code': 'SAPTEIC' }, { 'Value': '02MX', 'ViewValue': 'Techint Servicios SA de CV (México)', 'Code': 'SAPTEIC' }, { 'Value': 'AR05', 'ViewValue': 'Tecnomatter S.A. (AR05)', 'Code': 'SAPTEIC' }, { 'Value': 'AR42', 'ViewValue': 'TECSESI S.A', 'Code': 'SAPTEIC' }, { 'Value': 'AR33', 'ViewValue': 'Tesur S.A. ', 'Code': 'SAPTEIC' }, { 'Value': 'AR13', 'ViewValue': 'UTE - Caracoles', 'Code': 'SAPTEIC' }, { 'Value': 'AR19', 'ViewValue': 'UTE - Pascua Lama', 'Code': 'SAPTEIC' }, { 'Value': 'AR32', 'ViewValue': 'UTE GNEA', 'Code': 'SAPTEIC' }] }, { 'SapName': 'TERNIUM', 'Companies': [{ 'Value': 'TM12', 'ViewValue': 'Corporativo Grupo IMSA ', 'Code': 'SAPTER' }, { 'Value': 'TM09', 'ViewValue': 'EXPRESS ANAHUAC', 'Code': 'SAPTER' }, { 'Value': 'TM07', 'ViewValue': 'FERROPAK COMERCIAL ', 'Code': 'SAPTER' }, { 'Value': 'TM06', 'ViewValue': 'FERROPAK SERVICIOS', 'Code': 'SAPTER' }, { 'Value': 'TM27', 'ViewValue': 'FUNDACION TX EDUCACION AC', 'Code': 'SAPTER' }, { 'Value': 'TM25', 'ViewValue': 'Fundación Ternium, A.C.', 'Code': 'SAPTER' }, { 'Value': 'TE02', 'ViewValue': 'GALVAMET AMERICA', 'Code': 'SAPTER' }, { 'Value': 'TM10', 'ViewValue': 'HYLSA S.A. de C.V.', 'Code': 'SAPTER' }, { 'Value': 'TM13', 'ViewValue': 'IMSA Monclova', 'Code': 'SAPTER' }, { 'Value': 'TM11', 'ViewValue': 'Industrias Monterrey', 'Code': 'SAPTER' }, { 'Value': 'TM03', 'ViewValue': 'LAS ENCINAS S.A DE C.V', 'Code': 'SAPTER' }, { 'Value': 'TA02', 'ViewValue': 'Nueva Impeco', 'Code': 'SAPSID' }, { 'Value': 'TC07', 'ViewValue': 'Proc. de Mat. Ind. S.A.', 'Code': 'SAPTER' }, { 'Value': 'TM26', 'ViewValue': 'Servicios Integ. Nova Mty', 'Code': 'SAPTER' }, { 'Value': 'TA07', 'ViewValue': 'Soluciones Integrales de Gestión S.A.', 'Code': 'SAPTPI' }, { 'Value': 'TM08', 'ViewValue': 'TECNICA INDUSTRIAL', 'Code': 'SAPTER' }, { 'Value': 'TM24', 'ViewValue': 'Tenigal S. de R.L. de C.V.', 'Code': 'SAPTER' }, { 'Value': 'TA01', 'ViewValue': 'Ternium Argentina S.A.', 'Code': 'SAPSID' }, { 'Value': '2CSA', 'ViewValue': 'TERNIUM BRASIL', 'Code': 'SAPTEB' }, { 'Value': 'TC03', 'ViewValue': 'TERNIUM COLOMBIA S A S', 'Code': 'SAPTER' }, { 'Value': 'TC08', 'ViewValue': 'TERNIUM DEL ATLANTICO S.A.S', 'Code': 'SAPTER' }, { 'Value': 'TC04', 'ViewValue': 'TERNIUM del Cauca S.A.S.', 'Code': 'SAPTER' }, { 'Value': 'TB01', 'ViewValue': 'Ternium do Brasil Cons Lt', 'Code': 'SAPTER' }, { 'Value': 'TM21', 'ViewValue': 'Ternium Ing y Serv de México SA de CV', 'Code': 'SAPTER' }, { 'Value': 'TG03', 'ViewValue': 'TERNIUM INT. COSTA RICA', 'Code': 'SAPTER' }, { 'Value': 'TG06', 'ViewValue': 'TERNIUM INT. EL SALVADOR', 'Code': 'SAPTER' }, { 'Value': 'TG01', 'ViewValue': 'TERNIUM INT. GUATEMALA', 'Code': 'SAPTER' }, { 'Value': 'TG05', 'ViewValue': 'TERNIUM INT. HONDURAS', 'Code': 'SAPTER' }, { 'Value': 'TG04', 'ViewValue': 'TERNIUM INT. NICARAGUA', 'Code': 'SAPTER' }, { 'Value': 'TM01', 'ViewValue': 'TERNIUM MEXICO (TM01)', 'Code': 'SAPTER' }, { 'Value': 'TC06', 'ViewValue': 'Ternium Siderúrgica de Caldas S.A.S', 'Code': 'SAPTER' }, { 'Value': '0010', 'ViewValue': 'TERNIUM USA, Inc', 'Code': 'SAPSHR' }, { 'Value': 'TE01', 'ViewValue': 'TRANSAMERICA INC', 'Code': 'SAPTER' }, { 'Value': 'TU06', 'ViewValue': 'TX Engineering Uruguay', 'Code': 'SAPTPI' }, { 'Value': 'TA06', 'ViewValue': 'TX ING Y SERV. DE ARG. SA', 'Code': 'SAPTPI' }] }, { 'SapName': 'EXIROS', 'Companies': [{ 'Value': 'ETRU', 'ViewValue': 'Exiros B.V. Suc. Uruguay', 'Code': 'SAPEXI' }, { 'Value': 'FINM', 'ViewValue': 'FINMA S.A.I.F.', 'Code': 'SAPEXI' }] }];
