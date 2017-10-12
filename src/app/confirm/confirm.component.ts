import { Component, OnInit, Inject } from '@angular/core';
// , Input
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
// import { ThumbnailsModule } from 'angular-thumbnails';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
// export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {
export class ConfirmComponent implements ConfirmModel, OnInit {
  title: string;
  message: string;
  images:any[] = [
    {url:'/assets/image/character_01.png'},
    {url:'/assets/image/character_02.png'},
    {url:'/assets/image/character_03.png'},
    {url:'/assets/image/character_04.png'},
    {url:'/assets/image/character_05.png'},
    {url:'/assets/image/character_06.png'},
    {url:'/assets/image/character_07.png'},
    {url:'/assets/image/character_08.png'},
    {url:'/assets/image/character_09.png'},
    {url:'/assets/image/character_10.png'},
    {url:'/assets/image/character_11.png'},
    {url:'/assets/image/character_12.png'},
  ];

  ////////////////////////
  img:string;

  constructor(public dialogRef: MdDialogRef<ConfirmComponent>) { }

  ngOnInit() {
    this.img = localStorage.getItem('profile_img');
  }

  onClick(img):Promise<any> {
    // alert(img);
    return this.img = img;
  }

  onCloseSave(){
    this.dialogRef.close(this.img);
    // this.dialogRef.close(this.imgClickExam());
  }

  onCloseCancel() {
    console.log('onCloseCancel:'+this.img);
    this.dialogRef.close('');
  }
}
