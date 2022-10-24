import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';
import { IExtrato } from '../interfaces/extrato';
import { IFuncoes } from '../interfaces/funcoes';
import { ITransferencia } from '../interfaces/transferencia';

@Injectable({
  providedIn: 'root'
})
export class ContasService {


  endpoint = 'conta/';
  api = environment.api;

  constructor(private http: HttpClient) { }

  listarTodasContas() {
    return this.http.get<IConta[]>(`${this.api}/${this.endpoint}`);
  }

  cadastrarConta(conta: IConta){
    return this.http.post(`${this.api}/${this.endpoint}`, conta);
  }

  atualizarConta (conta: IConta){
    return this.http.put(`${this.api}/${this.endpoint}/${conta.id}`, conta);
  }

  buscarContaPorId(id: number){
    return this.http.get<IConta>(`${this.api}/${this.endpoint}/${id}`);
  }

  excluirContaPorId(id: number){
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);
  }

  saque(saque: IFuncoes): Observable<any>{
    return this.http.post<IConta>(`${this.api}/${this.endpoint}/saque`,saque);
  }

  deposito(deposito: IFuncoes): Observable<any>{
    return this.http.post<IConta>(`${this.api}/${this.endpoint}/deposito`,deposito);
  }

  transferencia(transferencia: ITransferencia): Observable<any> {
    return this.http.post<IConta>(`${this.api}/${this.endpoint}/transferencia`, transferencia);
  }

  extrato(extrato: IExtrato): Observable<any> {
    return this.http.post<IConta>(`${this.api}/${this.endpoint}extrato`, extrato);
  }



}
