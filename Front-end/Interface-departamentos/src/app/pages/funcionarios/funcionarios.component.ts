import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
})
export class FuncionariosComponent implements OnInit {
  funcionarios: any = [];
  constructor(
    private funcionarioService: FuncionarioService,
    private departamentoService: DepartamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('departamentoId');
    this.departamentoService.getDepartamento(this.id).subscribe((data) => {
      this.funcionarios = data;
    });
  }

  getFuncionarios(id: number) {
    this.departamentoService.getDepartamento(id).subscribe((data) => {
      this.funcionarios = data;
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

  abrirDetalheFuncionario(id: number) {
    this.router.navigate([`departamento/${this.id}/funcionario/${id}`]);
  }

  cadastrarFuncionario() {
    this.router.navigate([`departamento/${this.id}/funcionario`]);
  }

  deleteFuncionario(id: number) {
    this.funcionarioService.deleteFuncionario(id).subscribe(() => {
      this.getFuncionarios(this.funcionarios.id);
    });
  }
}
