import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  url = "https://localhost:7126";
  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }
  constructor(private httpClient: HttpClient) { }
  getDepartamentos(){
      return this.httpClient.get(this.url + "/api/Departamentos", this.httpOptions)
  }

  getDepartamento(id: number){
    return new Observable(observer => {
      this.httpClient.get(this.url + `/api/Departamentos/${id}`, this.httpOptions).subscribe(result => {
        observer.next(result);
        observer.complete();
      });
    });
  }

  postDepartamento(departamento:any){
    return new Observable(observer =>{
      this.httpClient.post(this.url + `/api/Departamentos`, departamento, this.httpOptions).subscribe(result => {
        observer.next(result);
        observer.complete();
      });
    });
  }

  putDepartamento(id: number, departamento: any){
    return this.httpClient.put(this.url + `/api/Departamentos/${id}`, departamento, this.httpOptions);
  }

  deleteDepartamento(id: number){
    return new Observable(observer => {
      this.httpClient.delete(this.url + `/api/Departamentos/${id}`, this.httpOptions).subscribe(result =>{
        observer.next(result);
        observer.complete();
      });
    })
  }
}
