import { Component, OnInit, ElementRef, Renderer, DoCheck,Output, EventEmitter } from '@angular/core';
// import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { ConfirmComponent } from '../confirm/confirm.component';
import { MdDialog } from '@angular/material';

import { MemberService } from '../service/member.service';
import { Member } from '../model/member.model';

export interface ConfirmModel {
  title: string;
  message: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements ConfirmModel, OnInit, DoCheck {
  login: boolean = false;
  isShow = true;
  isShow2 = true;
  isShow3 = true;

  title: string;
  message: string;
  dialogResult = "";

  members: Member[] = [];
  errorMessage: string;

/////////////////////////////////////
  name:string = "김정민";
  password:string = "a";
  img1:string = "/assets/image/character_01.png";

  constructor(public dialog: MdDialog, private memberService: MemberService) {
  }

  // updateImg(img: string): void{
  //   this.img1 = img;
  // }
  removeMember(member: Member) {
    this.memberService.removeMember(member)
      .subscribe(members => this.members = members, error => this.errorMessage = <any>error)
  }

  updateName(name: string): void{
    this.name = name;
    this.isShow = true;
  }
  updatePassword(pw: string): void{
    this.password = pw;
    this.isShow2 = true;
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(this.isShow);
  }

  openDialog() {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      width: "600px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog save: ${result}`);
      if (result) {
        this.img1 = result;
      } else {
        this.img1 = this.img1;
      }
    });
  }
}
