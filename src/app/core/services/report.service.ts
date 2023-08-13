import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { environment } from 'src/environments/environment.development'; 
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
   reportService: string;
   headers : any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.reportService = environment.apiUrl + "api/ReportTabulatedValue"

    this.authService.postAuth().subscribe(
      (data =>{
        this.headers = { 'Authorization': "Bearer " + data }
      }));
   }

   getReport(category:string, station: string, month: string, year: string){
    let urlService = `${this.reportService}?category=${category}&station=${station}&month=${month}&year=${year}`;
    let headers = this.headers;
    return this.http.get<any>(urlService, { headers });
  }

}
