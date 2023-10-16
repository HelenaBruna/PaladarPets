import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { classifier } from 'src/app/models/classifier';
import { ScannerServiceService } from 'src/app/services/scanner-service.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent  {
  
  faSearch = faSearch;
  barCode: string = "";

  classifier: classifier = {
    class: "",
    cluster: 0
  }

  constructor(private scannerService: ScannerServiceService) {
    
  }
  
  Search(): void {
    this.scannerService.GetFeedClassification(this.barCode).subscribe((response: classifier) => {
      this.classifier = response
    })
  }

}
