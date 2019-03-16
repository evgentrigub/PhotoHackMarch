import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { P } from '@angular/core/src/render3';
 
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class UploadService {
 
  private url = "";
  base64textString = [];
 
  constructor(
    private http: HttpClient,
) { }

// postElements(message:string, photo?: File):Observable<any>{
  postElements(message:string, photoBase64: string):Observable<any>{
    if(message && photoBase64){
      const body = {img: photoBase64, message: message};
      console.log("Message and Photo: "+message+' '+photoBase64);
      return this.http.post(this.url, body);
    }
  }

}