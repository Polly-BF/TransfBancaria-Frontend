import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  url = 'http://localhost:3002/banco'

  constructor(private http:HttpClient) { }

  getContas(){
    return this.http.get(this.url)
    }

  //get para uma conta
  getUmaConta(id:any){
    return this.http.get(this.url + '/' + id)
    }

  // adicionar uma conta
  addConta(conta:Conta){
    return this.http.post(this.url, conta)
  }

  //deletar uma conta
  deleteConta(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  //modificar uma conta
  editar(id:any, conta:Conta){
    return this.http.put(this.url + '/' + id, conta)
  }
}

export interface Conta{
  id_transferencia?:string
  nomeCliente?:string
  valor?:string
  contaCliente?:string
}
