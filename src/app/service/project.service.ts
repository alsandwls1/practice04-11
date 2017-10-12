import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Project } from '../model/project.model';

@Injectable()
export class ProjectService {

  private subject = new Subject<any>();

  private proejectsUrl: string = "http://localhost:8080/projects";
  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: Http) { }


  getProjects(): Observable<Project[]> {
    return this.http.get(this.proejectsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addProject(p_name: string, p_domain: string): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let project = { "p_name": p_name, "p_domain": p_domain, "p_day":null};
    console.log('project = ' + JSON.stringify(project));

    // return this.http.post(this.proejectsUrl, JSON.stringify(project), options)
    //   .map(this.extractDataForObject)
    //   .catch(this.handleError)
    return this.http.post(this.proejectsUrl, JSON.stringify(project), options)
      .toPromise().then(res =>
        {
          var result = res.text();
          this.subject.next({'result': result});
    });

  }

  removeProject(project): Observable<Project[]> {
    const url = `${this.proejectsUrl}/${project.email}`;
    return this.http.delete(url, { headers: this.headers })
      .map(this.extractData)
      ._catch(this.handleError);
  }

  private extractDataForObject(res: Response) {
    console.log('extractDataForObject#res = ' + JSON.stringify(res));
    let json = res.text();//데이터만 뽑아 낼 수 있다. (헤더정보제외)
    json = JSON.parse(json);
    return json || {};
  }

  private extractData(res: Response) {
    console.log('extractData#res = ' + JSON.stringify(res));
    let json = res.text();
    json = JSON.parse(json);
    return json || [];
  }

  private handleError(res: Response) {
    console.log(res);
    return Observable.throw(res.json().error || 'Server Down');
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();

  }

}
