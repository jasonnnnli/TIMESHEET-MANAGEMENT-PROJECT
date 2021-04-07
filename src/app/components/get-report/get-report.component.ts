import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-report',
  templateUrl: './get-report.component.html',
  styleUrls: ['./get-report.component.css']
})
export class GetReportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
 
  }
  goBack(){
    this.router.navigate(['/home']);
}
}
