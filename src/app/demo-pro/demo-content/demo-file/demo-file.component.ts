import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { FileUploadService } from '../../../service/file-upload.service';

@Component({
  selector: 'app-demo-file',
  templateUrl: './demo-file.component.html',
  styleUrls: ['./demo-file.component.css']
})
export class DemoFileComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 }

  showFile = false
  // showFile = true;
  fileUploads: Observable<string[]>;

  constructor(private uploadService: FileUploadService) {}

  ngOnInit() {}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);

    this.selectedFiles = undefined;
  }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }


}
