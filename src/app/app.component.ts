import { Component, OnInit } from '@angular/core';
import { UploadService } from './services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UploadService]
})
export class AppComponent {
  photoToUpload: File = null;

  isLoading: boolean;
  urlFinal: string;
  photo: string;
  message: string;
  base64textString:string = '';

  constructor(
    private uploadSevice: UploadService,
  ) { }
  handleFileInput(files: File) {
    var file = files[0];
    console.log(file);

    if (files && file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photo = e.target.result;
      };
      reader.readAsDataURL(file);

      var reader1 = new FileReader();
      reader1.onload =this._handleReaderLoaded.bind(this);
      reader1.readAsBinaryString(file);
    }
  }
  uploadElements() {
    this.uploadSevice.postElements(this.message, this.base64textString);
  }
  
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString= btoa(binaryString);
    console.log(btoa(binaryString));
   }

}
