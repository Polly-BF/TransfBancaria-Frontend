import { Component, OnInit } from '@angular/core';
import { BancoService, Conta } from 'src/app/servicos/banco.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarContas: Conta[]

  constructor(private BancoService: BancoService, private router:Router) {
    this.ListarContas = []
  }

  ngOnInit(): void {
    this.listarContas()
  }

  listarContas(){
    this.BancoService.getContas().subscribe({
      next: (resultado) => {console.log(resultado)
                            this.ListarContas = <any>resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
    })
  }

  excluir(id:any){
    this.BancoService.deleteConta(id).subscribe({
      next: (resultado) => {console.log("Conta excluída")
                            this.listarContas()},
      error: (erro) => console.error(erro),
      complete: () => console.info("Processo de exclusão concluído")
    })
  }

  editar(id:any){
    this.router.navigate(['/edit/' + id])
  }
}





