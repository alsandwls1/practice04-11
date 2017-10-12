import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Project} from '../model/project.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProjectSearchService {
private subject = new Subject<any>();
  private searchUrl: string = "http://localhost:8080/projects";

  constructor(private http: Http) { }

  search(search): Promise<any> {
    return this.http.get(`${this.searchUrl}/${search}`,JSON.stringify(search)).toPromise().then(res=> {
    let result = res.text();
    result = JSON.parse(result);
    this.subject.next(result);
    });

  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

}
