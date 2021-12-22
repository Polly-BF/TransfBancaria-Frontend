import { Component, OnInit } from '@angular/core';
import { BancoService, Conta } from 'src/app/servicos/banco.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  conta:Conta = {
    id_transferencia:'',
    nomeCliente:'',
    valor:'',
    contaCliente:''
  }

  constructor(private BancoService:BancoService, private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <any>this.activateRoute.snapshot.params['id']
    console.log("id de entrada:" + id_entrada)
    this.BancoService.getUmaConta(id_entrada).subscribe({
      next: (resultado) => {console.log(resultado)
                            this.conta = <any>resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info("Conta encontrada!")
    })
  }

  modificar(){
     this.BancoService.editar(this.conta.id_transferencia,this.conta).subscribe({
      next: (resultado) => console.log("Conta editada com sucesso!"),
      error: (erro) => console.error(erro),
      complete: () => console.info("Conta editada!")
    })
    this.router.navigate(['/inicio'])
}

}
