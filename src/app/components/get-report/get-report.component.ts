import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-get-report',
  templateUrl: './get-report.component.html',
  styleUrls: ['./get-report.component.css']
})
export class GetReportComponent implements OnInit {
  timecards: any;
  errorMsg: any;

  constructor(private mockData: MockDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
 
    this.mockData.getTimecards().subscribe(
      (data) => {
        this.timecards = data; 
        console.log(data); 
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
  }

  goBack(){
      this.router.navigate(['/home']);
  }
}
