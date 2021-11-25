import { Location } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from 'src/app/services/departamento.service';

type Formulario = {nome: string; sigla: string;}

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss'],
})

export class DepartamentoComponent implements OnInit {
 

  formulario: Formulario = {
    nome: "",
    sigla: "",
  };

  constructor(
    private departamentoService: DepartamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.departamentoService.getDepartamento(this.id).subscribe((data) => {
      this.formulario = data as Formulario;
    });
  }
  
  goBack() {
    this.router.navigate(['']);
  }

  postPutDepartamento() {
    if (this.id == null) {
      this.departamentoService.postDepartamento(this.formulario).subscribe(val =>{
        this.goBack();
      });
      
    }else{
      this.departamentoService.putDepartamento(this.id, this.formulario).subscribe(val =>{
        this.goBack();
      });
    }
  }
}
