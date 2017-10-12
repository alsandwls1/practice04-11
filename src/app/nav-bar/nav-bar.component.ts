import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Member } from '../model/member.model';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  session: string;

  constructor(private memberService: MemberService, private router: Router) {
    this.session = localStorage.getItem('email');
  }

  ngOnInit() {
    console.log('nav start');
    this.memberService.getObservable().subscribe(
      massege=>{
        if(massege.login='true'){
          this.session = localStorage.getItem('email');
          if(this.session){
            this.router.navigate(['project-list']);
          }
        }
      }
    );
  }

  logout() {
    localStorage.removeItem("email");
    console.log('logout#session=' + this.session);
    this.session = null;
    console.log('logout#session=' + this.session);
  }

  onClick() {
    if(this.session){
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['project-list']);
    }
  }
}
