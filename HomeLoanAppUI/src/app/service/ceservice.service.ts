import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CeserviceService {

  constructor(private http:HttpClient) { }

  getData()
  {
    return this.http.get("http://localhost:8080/documents/getdocuments");
  }

  updateDocumentstatus(document)
  {
    return this.http.put("http://localhost:8080/documents/updateStaus", document);
  }

  updateReamrak(selectedDoc, remark)
  {
     return this.http.put("http://localhost:8080/documents/updateremark/"+remark, selectedDoc);
  }

  getEMI(doc){
     return this.http.get("http://localhost:8080/emi/emicalculate/"+JSON.stringify(doc))
  }

  genrateSanctionLetter(sanctionLetter, doc){
    return this.http.put("http://localhost:8080/pdf/sanctionletterpdf/"+JSON.stringify(sanctionLetter), doc);
  }

 
 

}