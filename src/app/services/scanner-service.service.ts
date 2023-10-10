import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ScannerServiceService {

  apiUrl = "https://southamerica-east1-deductive-notch-396522.cloudfunctions.net/classifier"

  authToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2MjYzZDA5NzQ1YjUwMzJlNTdmYTZlMWQwNDFiNzdhNTQwNjZkYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTExNjMxNDk5OTc1NTUyODY5MTE3IiwiZW1haWwiOiJkb3VncmVpc3Jyc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IlRGX3Jjb1Jac3FRdmszOXltUjFnenciLCJuYmYiOjE2OTY4OTU2OTQsImlhdCI6MTY5Njg5NTk5NCwiZXhwIjoxNjk2ODk5NTk0LCJqdGkiOiI1ODY4YTY4NDM2NTUwMTc0ZjZiZWUyZWI5NGEyYmQzZjJiZGFmN2I2In0.s6zEawqoSReIGNu9cejpXMPlbp6W-FwroI1mzTCU1o8ajYGwt5ppsROwXVxj_rFhgyzsfv0yUP0w_xyMGaWpq0y1B3vDsX_KG-gUucI34tcS4nwzQNvuDK6LVw4HbR8LDFlU30H1Rj7JRXfZecSoaXXxn0tuHFPnnPcmMSRU-hGmE2KzxbDPukHRs8oxvUOSC_YJeJgACU8IdWQvBvWqP0VyG-Fem2E2QgWKjP2XqE_1cgOp5YQdqGOGF8E8DZ_g-HM9jlalQpoLMopUQ6p9puk2Dxb5ZqNt0NXYRnj6ji3xKvcThqR8ZfKVjM3qZAX1-sYbSaPlXN1NBtVXCPp_pQ";


  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    })
  }
  
  constructor(private httpReq: HttpClient) { }

  getClassificacaoRacao(dadosRacao: any): Observable<any> {
    return this.httpReq.post<any>(this.apiUrl, dadosRacao, this.httpHeader).pipe(
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
