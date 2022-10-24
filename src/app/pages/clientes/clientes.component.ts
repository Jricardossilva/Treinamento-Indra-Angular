import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { AlertasService } from 'src/app/services/alertas.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    private clienteService: ClientesService,
    private alertaService: AlertasService
    ) { }
  clientes: ICliente[] = [];
  ngOnInit(): void {
    this.buscarTodosClientes();
  }

  buscarTodosClientes() {
    this.clienteService.listarTodosClientes().subscribe({
      next:(clientes: ICliente[]) => {
      this.clientes = clientes;
      },
      error: (e) => this.alertaService.alertaErro(e?.error?.detalhes[0])
    });
  }

  excluir(id? : number){
    if(id){
      this.clienteService.excluirClientePorId(id).subscribe({
        next: () => {
          this.alertaService.alertaSucesso('Cliente Removido com sucesso');
          this.buscarTodosClientes();
        },
        error: (e) => this.alertaService.alertaErro(e?.error?.detalhes[0])
      });
      return;
    }
  }
}
