import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Project } from '../model/project.model';

import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {}

  onSubmit(f) {
    if (f.valid) {
      var p = f.value;
      this.addProject(p.p_name, p.p_domain);
    }
  }

  addProject(p_name: string, p_domain: string) {
    this.projectService.addProject(p_name, p_domain).then(project => this.projects.push(project));

    this.projectService.getObservable().subscribe(
      massege => {
        if (massege.send = 'ok') {
          alert('생성완료!!');
          this.router.navigate(['project-list']);
        }
      }
    );

  }

}
