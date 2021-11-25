import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {
  departamentos: any = [];
  constructor(private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit(): void {
    this.getDepartamentos();
  }
 
  ngOnChanges(){
    window.location.reload();
  }

  getDepartamentos(){
    this.departamentoService.getDepartamentos().subscribe(data => {
      this.departamentos = data;
    });
  }

  abrirDetalheDepartamento (id: number) {
    this.router.navigate(['/departamento-detalhe', id]);
  }

  listarFuncionarios(id: number){
    this.router.navigate([`/departamento/${id}/funcionarios`]);
  }

  cadastrarDepartamento () {
    this.router.navigate(['/departamento-detalhe']);
  }

  deleteDepartamento(id: number){
    this.departamentoService.deleteDepartamento(id).subscribe(() =>{
      this.getDepartamentos();
    });
  }
}
