import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { IConta } from 'src/app/interfaces/conta';
import { AlertasService } from 'src/app/services/alertas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-cadastrar-conta',
  templateUrl: './cadastrar-conta.component.html',
  styleUrls: ['./cadastrar-conta.component.css']
})

export class CadastrarContaComponent implements OnInit {

  contaVazia: IConta = {
    id: 0,
    agencia: '',
    numero:'',
    saldo: 0,
  }

  idConta = 0;

  contaForm: FormGroup = this.preencherFormGroup(this.contaVazia);
  clientes: ICliente[] = [];
  buscarClientePorCpf: any = null;

  constructor(
    private contasService: ContasService,
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private alertasService: AlertasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buscarCliente();
    this.idConta = Number(this.route.snapshot.paramMap.get('id'));
    if(this.idConta) return this.buscarContaPorId();
  }

  buscarContaPorId(){
    this.contasService.buscarContaPorId(this.idConta).subscribe(result => {
      this.contaForm = this.preencherFormGroup(result);
    })
  }

  buscarCliente(){
    this.clientesService.listarTodosClientes().subscribe(result => {
      this.clientes = result;
    })
  }

  preencherFormGroup(conta: IConta) : FormGroup{
    return new FormGroup({
      id: new FormControl(conta.id ? conta.id: null),
      agencia: new FormControl(conta.agencia ? conta.agencia: '', Validators.required),
      numero: new FormControl(conta.numero ? conta.numero: '', Validators.required),
      saldo: new FormControl(conta.saldo ? conta.saldo: 0, Validators.required),
      idCliente: new FormControl(null, Validators.required)
    })
  }

  salvarConta(){

    const conta: IConta = {
      agencia: this.contaForm.get('agencia')?.value,
      numero: this.contaForm.get('numero')?.value,
      saldo: this.contaForm.get('saldo')?.value,
      cliente: {id: this.contaForm.get('idCliente')?.value} as ICliente
    }

    if(this.idConta){
      this.contasService.atualizarConta(conta).subscribe({
        next: () => {
          this.alertasService.alertaSucesso();
          this.router.navigateByUrl('/contas');
        },
        error: (e) => this.alertasService.alertaErro(e?.error?.detalhes[0])
      });
    } else {
    this.contasService.cadastrarConta(conta).subscribe({
      next: () => {
        this.alertasService.alertaSucesso();
        this.router.navigateByUrl('/contas');
      },
      error: (e) => this.alertasService.alertaErro(e?.error?.detalhes[0])
    });
  }
}
}
