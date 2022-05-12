import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

//  url:string= 'https://restcountries.com/v2/alpha?codes=arg,af,ge,aus';
  // https://restcountries.com/v3.1/subregion/europe
  url:string= 'https://restcountries.com/v2/alpha?codes=arg,br,col,mex,usa,it,fra';

  constructor(private http:HttpClient) {

   }
 

   getPaises=()=>{ 

    return this.http.get(this.url); //retorna promesa
   }


}
