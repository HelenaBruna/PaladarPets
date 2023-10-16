import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { codigo } from 'src/app/models/codigo';
import { ScannerServiceService } from 'src/app/services/scanner-service.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  
  faSearch = faSearch;
  codigoBarra: string = "";

  codigo: codigo = {
    codigoBarra: ""
  }

  constructor(private scannerService: ScannerServiceService) {
    
  }
  
  ngOnInit(): void {
    this.scannerService.getTest().subscribe( (retorno) => {
      console.log(retorno)
    })
  }


  Pesquisar(): void {
    this.codigo.codigoBarra = this.codigoBarra;
    this.scannerService.ClassificacaoRacao(this.codigo).subscribe((retorno) => {
      console.log(retorno)
    })
  }

}
