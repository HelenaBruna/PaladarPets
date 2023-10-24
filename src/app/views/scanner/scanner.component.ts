import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { classifier } from 'src/app/models/classifier';
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

  onScanSuccess(result: any): void {
    this.result = result;

    this.barCode = result;
    this.Search();
  }

  faSearch = faSearch;
  barCode: string = "";

  classifier: classifier = {
    class: "",
    cluster: 0
  }

  constructor(private scannerService: ScannerServiceService) {

  }

  OpenCam(): void {
    this.hideCam = false;
  }

  Search(): void {
    if (this.barCode != "") {
      this.scannerService.GetFeedClassification(this.barCode).subscribe((response: classifier) => {
        this.classifier = response
      })
    }
  }



}
