import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Location } from '@angular/common';

type Formulario = {
  nome: string;
  rg: string;
  foto: string | ArrayBuffer | null;
  departamentoId: number;
};

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss'],
})
export class FuncionarioComponent implements OnInit {
  formulario: Formulario = {
    nome: '',
    rg: '',
    foto: '',
    departamentoId: 0,
  };

  
  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location
  ) {}
  depId: any;
  funcId: any;
  FotoVerify?: boolean;
  ngOnInit(): void {
    this.depId = this.route.snapshot.paramMap.get('departamentoId')
    this.funcId = this.route.snapshot.paramMap.get('funcionarioId');
    this.funcionarioService.getFuncionario(this.funcId).subscribe((data) => {
      this.formulario = data as Formulario;
    });
  }

  goBack() {
    this._location.back();
  }

  base64Conv(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.formulario.foto = reader.result;
    };
    this.FotoVerify = true;
  }

  postPutFuncionario() {
    if (this.formulario.departamentoId == 0) {
      this.formulario.departamentoId = this.depId;
      this.funcionarioService.postFuncionario(this.formulario).subscribe(val =>{
        this.goBack();
      });
    } else {
      if(this.FotoVerify != true){
        this.formulario.foto = null;
      }
      this.funcionarioService.PutFuncionario(this.funcId, this.formulario).subscribe(val => {
        this.goBack();
      });
    }
  }
}
