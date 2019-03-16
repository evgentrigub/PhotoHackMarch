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
postElements(message:string, photoBase64: string){

  if(message && photoBase64){
    const body = {img: photoBase64, message: message};
    console.log("Message and Photo: "+message+' '+photoBase64);
    return this.http.post(this.url, body);
  }
}
// postFile(fileToUpload: File): Observable<any> {
//     const endpoint = 'http://upload-hack.photolab.me/upload.php';
//     let formData: FormData = new FormData();
//     formData.append('file1', fileToUpload);
//     formData.append('no_resize', "1");
//     return this.http.post(endpoint, formData);
// }
// ChangeFile(urlPhoto: string, templatename: string): Observable<any> {
//     const endpoint = 'http://api-hack.photolab.me/photolab_process.php';
//     let formData: FormData = new FormData();
//     let headers = new HttpHeaders();
//     headers.append("content-type", "application/json");
//     formData.append('image_url', urlPhoto);
//     formData.append('template_name', templatename);
//    // let obdy = "{'image_url[1]':'"+urlPhoto+"', 'template_name':'89FE3CEF-F529-D424-656A-296B5EBFA0D8'}";
//     return this.http.post(endpoint, formData);
// }
// ChangeFile2(urlPhoto: string, urlphoto2: string, templatename: string): Observable<any> {
//     const endpoint = 'http://api-hack.photolab.me/photolab_process.php';
//     let formData: FormData = new FormData();
//     let headers = new HttpHeaders();
//     headers.append("content-type", "application/json");
//     formData.append('image_url[1]', urlphoto2);
//     formData.append('image_url[2]', urlPhoto);
//     formData.append('template_name', templatename);
//    // let obdy = "{'image_url[1]':'"+urlPhoto+"', 'template_name':'89FE3CEF-F529-D424-656A-296B5EBFA0D8'}";
//     return this.http.post(endpoint, formData);
// }

 

}