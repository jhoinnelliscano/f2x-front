import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { environment } from 'src/environments/environment.development'; 
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authService: string;
  private userName: string;
  private password: string;

  constructor(private http: HttpClient) {
    this.authService = environment.apiUrl + "security/createToken"
    this.userName = environment.userName;
    this.password = environment.password;
   }

   postAuth(){
    return this.http.post(`${ this.authService }`, { userName: this.userName, password: this.password }).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
