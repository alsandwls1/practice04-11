import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-progress',
  templateUrl: './demo-progress.component.html',
  styleUrls: ['./demo-progress.component.css']
})
export class DemoProgressComponent implements OnInit {

  color = 'primary';
  // mode = 'determinate';
  mode = 'buffer';
  value = 40;
  bufferValue = 0;

  constructor() { }

  ngOnInit() {
  }

}
