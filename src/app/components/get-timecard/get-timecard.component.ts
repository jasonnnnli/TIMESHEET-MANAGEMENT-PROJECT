import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MockDataService } from 'src/app/services/mock-data.service';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-get-timecard',
  templateUrl: './get-timecard.component.html',
  styleUrls: ['./get-timecard.component.css']
})

export class GetTimecardComponent implements OnInit {

  public timecards:any = [];
  public doctors:any = [];
  public errorMsg:string = '';
  public name:string = '';
  public searchForm:any;

  constructor(
    private mockData: MockDataService,
    private fb: FormBuilder, 
  ) { }
  public columnsToDisplay = [
    'date',
    'location',
    'sector',
    'doctor',
    'fileNumber',
    'timeIn',
    'timeOut',
    'hoursWorked',
    'hourCode',
    'fbpPayroll',
    'amcoPayroll',
   
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  dataSource:any;
  ngOnInit() {
    this.searchForm = this.fb.group({
      name: ['']
    })

    this.mockData.getTimecards().subscribe(
      (data:any) => {
        this.timecards = data,     
        this.dataSource = new MatTableDataSource(data)
        console.log(this.dataSource.data)

      },
      (error) => this.errorMsg = error
    )
    this.mockData.getUsers().subscribe(
      (data) => this.doctors = data,
      (error) => this.errorMsg = error
    )
  }
  keyDownFunction(event:any) {
    if (event.keyCode === 13) {
      this.mockData.getTimecards().subscribe(
        (data) => this.timecards = data,
        (error) => this.errorMsg = error,
        ()=> {
          let search = this.searchForm.get('name').value
          let res = this.timecards.filter( (t: {doctor: string;}) => {
            return t.doctor.toLowerCase().includes(search.toLowerCase())
          })
          console.log(res)
        }
      )
    }
  }
}
