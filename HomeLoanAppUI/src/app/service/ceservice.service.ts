import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
