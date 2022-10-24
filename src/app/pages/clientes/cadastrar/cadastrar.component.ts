import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { AlertasService } from 'src/app/services/alertas.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarEditarComponent implements OnInit {

  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private alertasService: AlertasService,
    private router: Router
    ) { }

  idCliente = 0;
  clienteForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    cpf: new FormControl('', Validators.required),
    observacoes: new FormControl(''),
    ativo: new FormControl(true)
  });
  
  ngOnInit(): void {
    this.idCliente = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idCliente !== 0) {
      this.clientesService.buscarClientePorId(this.idCliente).subscribe({
        next: (cliente: ICliente) => {
          this.clienteForm.setValue({
            nome: cliente.nome,
            cpf: cliente.cpf,
            email: cliente.email,
            observacoes: cliente.observacoes || '',
            ativo: cliente.ativo || false
          })
        } 
      });
    }
    // if (this.idCliente !== 0) {
    //   this.clientesService.buscarClientePorId(this.idCliente).subscribe((cliente: ICliente) => {
    //     this.clienteForm.setValue({
    //       nome: cliente.nome,
    //       cpf: cliente.cpf,
    //       email: cliente.email,
    //       observacoes: cliente.observacoes || '',
    //       ativo: cliente.ativo || false
    //     });
    //   }, (error) => {
    //     console.error(error);
    //   });
    // }
  }

  cadastrar () {
    const cliente: ICliente = this.clienteForm.value as ICliente;
    cliente.ativo = true;

    if(this.idCliente){
      cliente.id = this.idCliente;
      this.clientesService.atualizarCliente(cliente).subscribe({
        next: () => {
          this.alertasService.alertaSucesso('Cliente Atualizado com sucesso');
          this.router.navigateByUrl("/clientes");
        },
        error: (e) => this.alertasService.alertaErro(e?.error?.detalhes[0])
      })
      return;
    }

    this.clientesService.cadastrarCliente(cliente).subscribe({
      next: () => {
        this.alertasService.alertaSucesso('Cliente Cadastrado com sucesso');
        this.router.navigateByUrl("/clientes");
      },
      error: (e) => this.alertasService.alertaErro(e?.error?.detalhes[0])
    })
    return;
  }
}
