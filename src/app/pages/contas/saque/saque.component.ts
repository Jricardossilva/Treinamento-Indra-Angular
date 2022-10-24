import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFuncoes } from 'src/app/interfaces/funcoes';
import { AlertasService } from 'src/app/services/alertas.service';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  constructor(
    private contasService: ContasService,
    private route: ActivatedRoute,
    private alertasService: AlertasService,
    private router: Router
  ) { }

  formSaque: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  saque(){
    const operacaoSaque: IFuncoes = this.formSaque.value as IFuncoes;
    this.contasService.saque(operacaoSaque).subscribe({
      next: () => {
        this.alertasService.alertaSucesso();
        this.router.navigateByUrl('/contas');
      },
      error: (e) => this.alertasService.alertaErro(e?.error?.detalhes[0])
    });
  }

}
