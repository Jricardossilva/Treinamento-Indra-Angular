import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IExtrato } from 'src/app/interfaces/extrato';
import { AlertasService } from 'src/app/services/alertas.service';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {



  constructor(
    private contasService: ContasService,
    private alertasService: AlertasService
  ) { }

  formExtrato: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numConta: new FormControl('', Validators.required),
    dataIni: new FormControl('', Validators.required),
    dataFim: new FormControl('', Validators.required),
  });

  extratos: IExtrato[] = [];

  ngOnInit(): void {
  }

  gerarExtrato(){
    
    const operacaoExtrato: IExtrato = this.formExtrato.value as IExtrato;
    this.contasService.extrato(operacaoExtrato).subscribe({
      next: (extratos: IExtrato[]) => {
        this.extratos = extratos
      },
      error: (e) => this.alertasService.alertaErro(e?.error?.detalhes[0])
    });
    // const operacaoExtrato: IExtrato = this.formExtrato.value as IExtrato;
    //   this.contasService.extrato(operacaoExtrato).subscribe((extratos: IExtrato[]) => {
    //     this.extratos = extratos;
    //   }
    // );
  }
}
