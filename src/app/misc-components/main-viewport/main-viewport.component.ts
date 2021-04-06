import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-viewport',
  templateUrl: './main-viewport.component.html',
  styleUrls: ['./main-viewport.component.css']
})
export class MainViewportComponent implements OnInit {

  public date = new Date();
  public username: string = '';
  public isAdmin: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
