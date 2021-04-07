import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MockDataService } from 'src/app/services/mock-data.service';
@Component({
  selector: 'app-get-admin',
  templateUrl: './get-admin.component.html',
  styleUrls: ['./get-admin.component.css']
})
export class GetAdminComponent implements OnInit {
  users: any;
  errorMsg: any;

  constructor(private mockData: MockDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
 
    this.mockData.getUsers().subscribe(
      (data) => {
        this.users = data; 
        console.log(data); 
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
  }

  goBack(){
      this.router.navigate(['/home']);
  }
}
