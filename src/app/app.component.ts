import { Component, OnInit } from '@angular/core';
import { ShareService } from '@service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sun: boolean = true;
  constructor(private share: ShareService) { }
  changeSun() {
    this.sun = !this.sun;
    this.share.changeAny("sun", this.sun);
  }
  ngOnInit() {
    this.share.sun$.subscribe(status => {
      let body = document.body.style, outside = document.getElementById("outside").style, header = document.getElementById("header").style;
      body.background = status ? 'url("../assets/img/w_bg.png")' : 'url("../assets/img/b_bg.jpg")';
      body.backgroundRepeat = 'no-repeat';
      body.backgroundSize = 'cover';
      outside.background = status ? "#333" : "#ccc";
      header.background = status ? "#000" : "#fff";
      header.color = status ? "#fff" : "#000";
    })
  }
}
