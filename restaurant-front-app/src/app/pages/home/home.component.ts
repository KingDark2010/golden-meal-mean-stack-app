import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  color = ""
  //clicks as array of numbers
  clicks: number[] = []
  display = false
  userdata = ""
  constructor() { }

  ngOnInit(): void {
  }
  emptyData(){
    this.userdata = ""
  }
  onDisplayChange() {
    this.display = !this.display
    this.clicks.push(this.clicks.length + 1)
  }

  clickStyler(click: number) {
    if (click > 5) {
      return "red";
    }
    else {
      return "green";
    }
  }
}
