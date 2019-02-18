import { Component, OnInit } from '@angular/core';
import { PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { GetDispatchNotesRequest} from '@shared/models/Requests';
import { BaseComponent } from '@create/base/base.component';

@Component({
  selector: 'app-declared-grid',
  templateUrl: './declared-grid.component.html',
  styleUrls: ['./declared-grid.component.css']
})
export class DeclaredGridComponent extends BaseComponent implements OnInit {

  public activateLoadingPanel: Boolean = true;
  public gridData: any;
  public gridDataArray: any[];

  //Grid PageCount Settings
  buttonCount = 5;
  info = true;
  type: 'numeric';
  pageSizes = true;
  previousNext = true;
  pageSize = 5;
  skip = 0;
  state: State = {
    skip: this.skip,
    take: this.pageSize,
  };

  ngOnInit() {
    super.ngOnInit();
    this.getDeclaredGridData();
  }

  getDeclaredGridData(): void {

    let filter: GetDispatchNotesRequest;

    filter = new GetDispatchNotesRequest();
    filter.State = '100';
    filter.SocietyID = this.globalForm.SelectCompany.get('Company').value.ID;
    filter.Holding = this.globalForm.SelectCompany.get('Company').value.Holding;
    filter.SupplierID = this.userLoggedService.supplierMr;
    
    this.logisticService.GetDeclaredGridData(filter)
        .subscribe(gridData => { 
          gridData.forEach(item => {
               item.ProposedDeliveryDate = this.helperService.parseDateByCulture(item.ProposedDeliveryDate, this.userLoggedService.culture);});
          this.gridData = process(gridData, this.state);
          this.gridDataArray = gridData;
          this.activateLoadingPanel = false;});

  }
  
  protected dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.gridDataArray, this.state);
  }

  pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.getDeclaredGridData();
  }
}
