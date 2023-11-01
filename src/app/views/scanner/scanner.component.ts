import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { classifier } from 'src/app/models/classifier';
import { portion } from 'src/app/models/portion';
import { ScannerServiceService } from 'src/app/services/scanner-service.service';

import { Result } from '@zxing/library';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {

  allowedFormats = [BarcodeFormat.DATA_MATRIX, BarcodeFormat.QR_CODE, BarcodeFormat.EAN_8, BarcodeFormat.CODE_39, BarcodeFormat.CODE_128, BarcodeFormat.CODE_93, BarcodeFormat.EAN_13]; // Adjust as needed
  result: Result;

  hideCam: boolean = true;

  hideSearch: boolean = false;
  showClass: boolean = false;
  showLoading: boolean = false;

  showError: boolean = false;

  showErrorBarCode: boolean = false;

  faSearch = faSearch;
  barCode: string = "";

  classifier: classifier = {
    class: "",
    cluster: 0,
    sql_data: {
      calcioMateriaSeca: 0,
      calcioMaxGKG: 0,
      materiaFibrosaGKG: 0,
      porcentagemCalcioMax: 0,
      porcentagemMateriaFibrosa: 0,
      porcentagemProteinaBrutaMin: 0,
      proteinaBrutaMinGKG: 0,
      proteinaMateriaSeca: 0,
      umidadeMaxGKG: 0,
    }
  }

  proteinProgressBar = { 'width': '0%' }
  calciumProgressBar = { 'width': '0%' }
  fibrousMatterProgressBar = { 'width': '0%' }

  constructor(private scannerService: ScannerServiceService) {
  }

  OpenCam(): void {
    this.hideCam = false;
  }

  Search(): void {
    if (this.barCode != "") {
      this.hideSearch = true;
      this.showLoading = true;
      this.scannerService.GetFeedClassification(this.barCode).subscribe((response: classifier) => {
        this.classifier = response;
        this.showErrorBarCode = false;
        this.proteinProgressBar.width = this.classifier.sql_data.porcentagemProteinaBrutaMin + "%";
        this.calciumProgressBar.width = this.classifier.sql_data.porcentagemCalcioMax + "%";
        this.fibrousMatterProgressBar.width = this.classifier.sql_data.porcentagemMateriaFibrosa + "%";
        this.showClass = true;
        this.showLoading = false;
      },
        error => {
          this.showError = true;
          this.showLoading = false;
          this.hideSearch = false;
        });
    } else {
      this.showErrorBarCode = true;
    }
  }

  NewSearch() {
    this.hideSearch = false;
    this.showClass = false;
  }

  OnScanSuccess(result: any): void {
    this.result = result;
    this.barCode = result;
    this.hideCam = false;
    this.Search();
  }


}
