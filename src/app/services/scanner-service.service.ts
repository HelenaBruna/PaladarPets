import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ScannerServiceService {

  apiUrl = "https://southamerica-east1-deductive-notch-396522.cloudfunctions.net/classifier"


  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  
  constructor(private httpReq: HttpClient) { }


  ClassificacaoRacao(codigoBarra: string): Observable<any> {
    return this.httpReq.get<any>(this.apiUrl + '?codigoBarra=' + codigoBarra).pipe(
      retry(1),
      catchError(this.observarBug)
    )
  }

  observarBug(bug: any) {
    let infosBug: any = ''

    if (bug.error instanceof ErrorEvent) {
      infosBug = bug.error.message
    } else {
      infosBug = `Codigo do erro: ${bug.status}\nMensagem do erro: ${bug.message}`
    }

    console.log(infosBug)

    return throwError(() => infosBug)
  }

}
