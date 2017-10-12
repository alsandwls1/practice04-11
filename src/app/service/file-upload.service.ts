import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpRequest, HttpResponse, HttpEventType, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FileUploadService {
  private uploadUrl: string = "http://localhost:8080/";

  fileUploadNames: Observable<string[]>;

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File, progress: { percentage: number }) {
    let formdata: FormData = new FormData();
    // let  headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8;' });

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.uploadUrl+'post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    this.http.request(req).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
  }

  getFiles(): Observable<string[]> {
    return this.http.get(this.uploadUrl + 'getallfiles');
  }

}
// @Injectable()
// export class FileUploadService {
//   private uploadUrl: string = "http://localhost:8080/upload";
//
//   fileUploadNames: Observable<string[]>;
//
//   constructor(private http: HttpClient) { }
//
//   pushFileToStorage(file: File, progress: { percentage: number }) {
//     let formdata: FormData = new FormData();
//
//     formdata.append('file', file);
//
//     const req = new HttpRequest('POST', this.uploadUrl, formdata, {
//       reportProgress: true,
//       responseType: 'text'
//     });
//
//     this.http.request(req).subscribe(event => {
//       if (event.type === HttpEventType.UploadProgress) {
//         progress.percentage = Math.round(100 * event.loaded / event.total);
//       } else if (event instanceof HttpResponse) {
//         console.log('File is completely uploaded!');
//       }
//     });
//   }
//
//   getFiles(): Observable<string[]> {
//     return this.http.get(this.uploadUrl + '/getallfiles');
//   }
//
// }
