import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransferencia } from 'src/app/interfaces/transferencia';
import { AlertasService } from 'src/app/services/alertas.service';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  constructor(
    private contasService: ContasService,
    private route: ActivatedRoute,
    private alertasService: AlertasService,
    private router: Router,
    
  ) { }
  
  formTransferencia: FormGroup = new FormGroup({
    agenciaDestino: new FormControl('', Validators.required),
    agenciaOrigem: new FormControl('', Validators.required),
    numeroContaDestino: new FormControl('', Validators.required),
    numeroContaOrigem: new FormControl('', Validators.required),
    valor: new FormControl(null, Validators.required)
  });
  
  ngOnInit(): void {
  }

  transferencia(){
    const operacaoTransferencia: ITransferencia = this.formTransferencia.value as ITransferencia;
    this.contasService.transferencia(operacaoTransferencia).subscribe({
      next: () => {
        this.alertasService.alertaSucesso();
        this.router.navigateByUrl('/contas');
      },
      error: (e) => this.alertasService.alertaErro(e?.error?.detalhes[0])
    });
  }


}
