import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { environment } from 'src/environments/environment.development'; 
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   dataService: string;
   categoriesService: string;
   stationsService: string;
   headers : any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.dataService = environment.apiUrl + "api/Vehicle"
    this.categoriesService = environment.apiUrl + "api/Vehicle/categories"
    this.stationsService = environment.apiUrl + "api/Vehicle/stations"

    this.authService.postAuth().subscribe(
      (data =>{
        this.headers = { 'Authorization': "Bearer " + data }
      }));
  }

  getToken(){
    this.authService.postAuth().subscribe(
      (data =>{
        this.headers = { 'Authorization': "Bearer " + data }
      }));
  }

  getData(category:string, station: string, date: string){
    let urlService = `${this.dataService}?category=${category}&station=${station}&startDate=${date}&endDate=${date}`;
    let headers = this.headers;
    return this.http.get<any>(urlService, { headers});
  }

  getCategories(){
    return this.http.get<any>(this.categoriesService);
  }

  getStations(){
    return this.http.get<any>(this.stationsService);
  }

}
