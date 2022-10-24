import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFuncoes } from 'src/app/interfaces/funcoes';
import { AlertasService } from 'src/app/services/alertas.service';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  constructor(
    private contasService: ContasService,
    private route: ActivatedRoute,
    private alertasService: AlertasService,
    private router: Router
  ) { }

  formDeposito: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  deposito(){
    const operacaoDeposito: IFuncoes = this.formDeposito.value as IFuncoes;
    this.contasService.deposito(operacaoDeposito).subscribe({
      next: () => {
        this.alertasService.alertaSucesso();
        this.router.navigateByUrl('/contas');
      },
      error: (e) => this.alertasService.alertaErro(e?.error?.detalhes[0])
    });
  }

}
