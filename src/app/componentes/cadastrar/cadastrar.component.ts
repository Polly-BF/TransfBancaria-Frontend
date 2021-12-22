import { Component, OnInit } from '@angular/core';
import { BancoService, Conta } from 'src/app/servicos/banco.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  conta:Conta = {
    id_transferencia:'',
    nomeCliente:'',
    valor:'',
    contaCliente:''
  }

  constructor(private BancoService:BancoService, private router:Router) { }

  ngOnInit(): void {
  }

  adicionar(){
    delete this.conta.id_transferencia
    this.BancoService.addConta(this.conta).subscribe({
      next: (resultado) => console.log("Tarefa cadastrada com sucesso!"),
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
    })
    this.router.navigate(['/inicio'])
  }
}
