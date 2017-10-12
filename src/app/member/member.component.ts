import { Component, OnInit } from '@angular/core';

import { MemberService } from '../service/member.service';
import { Member } from '../model/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  members: Member[] = [];
  errorMessage: string;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers()
      .subscribe(members => this.members = members, error => this.errorMessage = <any>error);
  }

  onSubmit(f) {
    if (f.valid) {
      var member = f.value;
      this.addMember(member.email, member.password, member.name);
    }
  }

  addMember(email: string, password: string, name: string) {
    this.memberService.addMember(email, password, name)
      .subscribe(member => this.members.push(member), error => this.errorMessage = <any>error);
  }

  removeMember(member: Member) {
    this.memberService.removeMember(member)
      .subscribe(members => this.members = members, error => this.errorMessage = <any>error)
  }

}
