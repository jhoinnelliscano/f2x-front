import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/core/services/report.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit  {
  
  isLoadData: boolean;
  Data: any;
  dateSelected: string = "";
  monthSelected: string = "";
  yearSelected: string = "";

  totalQuantity: number = 0;
  totalValue: number = 0;

  resultStations: any[] = [];
  resultDates: any[] = [];

  constructor(private reportServiceService: ReportService) 
  {
    this.isLoadData = false;
  }

  ngOnInit(): void {

  }

  getData(): void{
    this.reportServiceService.getReport("", "", this.monthSelected, this.yearSelected).subscribe(
      (data =>{
        this.Data = data;
        this.resultStations = data.stations;
        this.totalQuantity = data.totalQuantity;
        this.totalValue = data.totalValue;
        this.resultDates = data.dates;
      }));  
  }

  onChangeDate(event: any){
    this.dateSelected = event.target.value
    var items = this.dateSelected.split("-");
    this.yearSelected = items[0];
    this.monthSelected = items[1];
    console.log(event.target.value);
    console.log(this.yearSelected);
    console.log(this.monthSelected);
    this.getData();
    this.isLoadData = true;
  }
}
