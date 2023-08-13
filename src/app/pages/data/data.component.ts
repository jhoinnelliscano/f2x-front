import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  listOfCategories: string[] = [];
  listOfStations: string[] = [];
  listOfData: any[] = [];
  isLoadData: boolean;

  pageSize = 10;
  pageFrom = 0;
  pageTo = 10;
  pageIndex = 0;

  categorySelected: string = "";
  stationSelected: string = "";
  dateSelected: string = "";

  constructor(private dataServiceService: DataService) 
  {
    this.isLoadData = false;
  }

  ngOnInit(): void {
    
    this.dataServiceService.getCategories().subscribe(
    (data =>{
      this.listOfCategories = data;
    }));

    this.dataServiceService.getStations().subscribe(
      (data =>{
        this.listOfStations = data;
      }));      
  }

  getData(): void{
    if(this.dateSelected === "")
    {
      alert('Seleccione una fecha para realizar la busqueda');
    }else{
      this.dataServiceService.getData(this.categorySelected, this.stationSelected, this.dateSelected).subscribe(
        (data =>{
          this.listOfData = data;
        }));  
        this.isLoadData = true;
    }
  }

  onChangeCategory(category:string){
    this.categorySelected = category;
    console.log(category);
    this.getData();
  }

  onChangeStation(station: string){
    this.stationSelected = station;
    console.log(station);
    this.getData();
  }

  onChangeDate(event: any){
    this.dateSelected = event.target.value
    console.log(event.target.value);
    this.getData();
  }

  changePage(e:PageEvent){
    this.pageIndex =e.pageIndex;
    this.pageFrom = e.pageIndex * e.pageSize;;
    this.pageTo = this.pageFrom + e.pageSize;
  }

  calculateIndex(index:number ): number {
    let newNumber = 0;
    if(this.pageIndex== 0)
    {
      return index + 1;
    }
    newNumber = ((index + 1) * this.pageIndex)  + this.pageSize;
    return newNumber;
  }

}
