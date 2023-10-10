import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ScannerServiceService } from 'src/app/services/scanner-service.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {
  
  faSearch = faSearch;

  dadosRacao = {
    "porcentagemUmidadeMax": 100,
    "umidadeMaxGKG": 100,
    "porcentagemProteinaBrutaMin": 100,
    "proteinaBrutaMinGKG": 100,
    "proteinaMateriaSeca": 100,
    "porcentagemCalcioMax": 100,
    "calcioMaxGKG": 100,
    "calcioMateriaSeca": 100,
    "porcentagemMateriaFibrosa": 100,
    "materiaFibrosaGKG": 100
  }

  codigoBarra: string = "";

  constructor(private scannerService: ScannerServiceService) {
    
  }


  Pesquisar(): void {
    this.scannerService.getClassificacaoRacao(this.dadosRacao).subscribe((retorno) => {
      console.log(retorno)
    })
  }

}
