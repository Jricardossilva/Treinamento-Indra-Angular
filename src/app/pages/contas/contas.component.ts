import { Component, OnInit } from '@angular/core';
import { IConta } from 'src/app/interfaces/conta';
import { AlertasService } from 'src/app/services/alertas.service';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  constructor(
    private contasService: ContasService,
    private alertasService: AlertasService
    ) { }

  contas: IConta[] = [];
  
  ngOnInit(): void {
    this.buscarTodasContas();
  }

  buscarTodasContas() {
    this.contasService.listarTodasContas().subscribe({
      next: (contas: IConta[]) => {
        this.contas = contas;
      },
      error: (e) => this.alertasService.alertaErro(e?.error?.detalhes[0])
    });
  }

  excluir(id? : number){
    if(id){
      this.contasService.excluirContaPorId(id).subscribe({
        next: () => {
          this.alertasService.alertaSucesso('Conta removida com sucesso');
          this.buscarTodasContas();
        },
        error: (e) => this.alertasService.alertaErro(e?.error?.detalhes[0])
      })
      return;
    }
  }


}
