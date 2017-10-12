import { Component, OnInit } from '@angular/core';

//화면전환 추가
import { Router, ActivatedRoute } from '@angular/router';


import { MemberService } from '../service/member.service';
import { Member } from '../model/member.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  members: Member[] = [];
  errorMessage: string;
  session: any = {};
  returnUrl:string;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.session = localStorage.getItem("email");
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  loginSubmit(loginform) {
    var member = loginform.value;
    this.memberService.loginMember(member.email, member.password)
      .then(() => { this.session = localStorage.getItem("email") });
  }
}
