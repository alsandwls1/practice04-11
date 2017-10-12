import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemberService } from '../service/member.service';
import { Member } from '../model/member.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  members: Member[] = [];
  errorMessage: string;
  session: string;

  constructor(private memberService: MemberService, private router:Router) { }

  ngOnInit() {
    // this.session = localStorage.getItem("email")
    // console.log('session = ' + this.session);
  }

  onSubmit(f) {
    if (f.valid) {
      var member = f.value;
      this.addMember(member.email, member.password, member.name);
    }
  }

  addMember(email: string, password: string, name: string) {
    this.memberService.addMember(email, password, name)
      .subscribe(
        member => {
          this.members.push(member);
          this.router.navigate(['/login']);
        },
        error => {
          this.errorMessage = <any>error
        },
      );
  }

}
