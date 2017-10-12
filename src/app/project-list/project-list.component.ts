import { Component, OnInit } from '@angular/core';
import { MdCardModule, MdButtonModule } from '@angular/material';
import { Router } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { Project } from '../model/project.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ProjectSearchService } from '../service/project-search.service';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectSearchService]
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  // private subject = new Subject<any>();

  constructor(private router:Router, private projectSearchService: ProjectSearchService, private projectService:ProjectService) { }

  ngOnInit() {
    this.getProject();

    this.projectService.getObservable().subscribe(
      massege=>{
        if(massege.result='1'){
          this.getProject();
        }
      }
    );

    this.projectSearchService.getObservable().subscribe(
      massege=>{
        console.log(massege);
        this.projects = massege;
      }
    );

  }
  search(f): void{
    var search = f.value.key
    console.log(search);
    this.projectSearchService.search(search);

  }

  getProject(){
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  addProject(){
    this.router.navigate(['new-project']);
  }

}
