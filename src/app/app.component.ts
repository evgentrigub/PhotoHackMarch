import { Component, OnInit } from '@angular/core';
import { UploadService } from './services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UploadService]
})
export class AppComponent {
  title = 'app';
  fileToUpload: File = null;

  urlPhoto1: string;
  urlsemiFinal: string;
  isLoading: boolean;

  urlFinal: string;
  photo: string;
  message: string;

  constructor(
    private upload: UploadService,
  ) { }
  handleFileInput(files: FileList) {

    console.log(files);
    this.fileToUpload = files.item(0);
    if (files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photo = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    }
  }
  uploadElements() {
    
  }
}
