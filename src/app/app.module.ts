import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ContasComponent } from './pages/contas/contas.component';
import { CadastrarEditarComponent } from './pages/clientes/cadastrar/cadastrar.component';
import { CadastrarContaComponent } from './pages/contas/cadastrar-conta/cadastrar-conta.component';
import { SaqueComponent } from './pages/contas/saque/saque.component';
import { DepositoComponent } from './pages/contas/deposito/deposito.component';
import { TransferenciaComponent } from './pages/contas/transferencia/transferencia.component';
import { ExtratoComponent } from './pages/contas/extrato/extrato.component';





@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomeComponent,
    HeaderComponent,
    ContasComponent,
    CadastrarEditarComponent,
    CadastrarContaComponent,
    SaqueComponent,
    DepositoComponent,
    TransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
