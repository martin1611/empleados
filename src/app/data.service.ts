import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    public url:string = "";
  constructor(private _http: HttpClient) {
      this.url = "http://masglobaltestapi.azurewebsites.net/api/Employees";
   }

   empleados() {
     return this._http.get(this.url);
   }
}
