import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  alertaSucesso(mensagem?: string) {
    Swal.fire({
      title: 'SUCESSO',
      text: mensagem || 'Operação realizada com sucesso.',
      icon: 'success'
    });
  }

  alertaErro(mensagem?: string) {
    Swal.fire({
      title: 'ERRO',
      text: mensagem || 'Falha na operação.',
      icon: 'error'
    });
  }
}