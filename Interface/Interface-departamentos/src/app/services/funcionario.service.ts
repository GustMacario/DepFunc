import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  url = "https://localhost:7126";
  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }
  constructor(private httpClient: HttpClient) { }
  getFuncionarios(){
    return new Observable(observer => {
      this.httpClient.get(this.url + "/api/Funcionarios", this.httpOptions).subscribe(result => {
        observer.next(result);
        observer.complete();
      });
    });
  }

  getFuncionario(id: number){
    return new Observable(observer => {
      this.httpClient.get(this.url + `/api/Funcionarios/${id}`, this.httpOptions).subscribe(result => {
        observer.next(result);
        observer.complete();
      });
    });
  }

  postFuncionario(funcionario:any){
    return new Observable(observer =>{
      this.httpClient.post(this.url + `/api/Funcionarios`, funcionario, this.httpOptions).subscribe(result => {
        observer.next(result);
        observer.complete();
      });
    });
  }

  PutFuncionario(id: number, funcionario: any){
    return this.httpClient.put(this.url + `/api/Funcionarios/${id}`, funcionario, this.httpOptions);
  }

  deleteFuncionario(id: number){
    return new Observable(observer => {
      this.httpClient.delete(this.url + `/api/Funcionarios/${id}`, this.httpOptions).subscribe(result =>{
        observer.next(result);
        observer.complete();
      });
    })
  }
}
