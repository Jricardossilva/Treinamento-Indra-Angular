import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastrarEditarComponent } from './pages/clientes/cadastrar/cadastrar.component';
import { ContasComponent } from './pages/contas/contas.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarContaComponent } from './pages/contas/cadastrar-conta/cadastrar-conta.component';
import { SaqueComponent } from './pages/contas/saque/saque.component';
import { DepositoComponent } from './pages/contas/deposito/deposito.component';
import { TransferenciaComponent } from './pages/contas/transferencia/transferencia.component';
import { ExtratoComponent } from './pages/contas/extrato/extrato.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clientes', component: ClientesComponent
  },
  {
    path: 'clientes/cadastrar', component: CadastrarEditarComponent
  },
  {
    path: 'clientes/editar/:id', component: CadastrarEditarComponent
  },
  {
    path: 'contas', component: ContasComponent
  },
  {
    path: 'contas/cadastrar-conta', component: CadastrarContaComponent
  },
  {
    path: 'contas/editar/:id', component: CadastrarContaComponent
  },
  {
    path: 'conta/saque', component: SaqueComponent
  },
  {
    path: 'conta/deposito', component: DepositoComponent
  },
  {
    path: 'conta/transferencia', component: TransferenciaComponent
  },
  {
    path: 'conta/extrato', component: ExtratoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
