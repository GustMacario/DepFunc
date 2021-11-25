import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { FormsModule } from '@angular/forms';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,
    HeaderComponent,
    DepartamentoComponent,
    FuncionariosComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
