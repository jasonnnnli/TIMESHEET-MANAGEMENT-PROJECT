import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TimeoutError } from 'rxjs';
import { MockDataService } from 'src/app/services/mock-data.service';


@Component({
  selector: 'app-add-time-card',
  templateUrl: './add-time-card.component.html',
  styleUrls: ['./add-time-card.component.css']
})

export class AddTimeCardComponent implements OnInit {

  public timecardForm:any;
  timecards:any;
  errorMsg:any;
  
  constructor(
    private fb: FormBuilder, 
    private mockData: MockDataService,
    private route: Router,
    // private location: Location,
  ) { }

  public locationsEast:any;
  public locationsWest:any;
  public sector:any;
  public doctors:any;
  public fileNumber:any;

 
  ngOnInit(): void {
    this.timecardForm = this.fb.group({
      date: ['', [Validators.required]],
      location: ['Albany, New York'],
      sector: ['East'],
      doctor: ['Alice Test'],
      fileNumber: ['1'],
      timeIn: ['', [Validators.required]],
      timeOut: ['',[Validators.required]],
      hourCode: ['FBP'],
      fbpPayroll: ['0', [Validators.required,Validators.pattern('^[0-9]+$')]],
      amcoPayroll: ['0', [Validators.required,Validators.pattern('^[0-9]+$')]],
      hoursWorked: ['']
    },)

    this.locationsEast = [
      'Albany, New York',
      'Atlanta, Georgia',
      'Baltimore, Maryland',
      'Beckley, West Virginia',
      'Boston, Massachusetts',
      'Buffalo, New York',
      'Charlotte, North Carolina',
      'Chicago, Illinois',
      'Cleveland, Ohio',
      'Columbus, Ohio',
      'Detroit, Michigan',
      'Fort Dix, New Jersey',
      'Fort Jackson, South Carolina',
      'Fort Lee, Virginia',
      'Harrisburg, Pennsylvania',
      'Indianapolis, Indiana',
      'Jackson, Mississippi',
      'Jacksonville, Florida',
      'Knoxville, Tennessee',
      'Lansing, Michigan',
      'Louisville, Kentucky',
      'Memphis, Tennessee',
      'Miami, Florida',
      'Milwaukee, Wisconsin',
      'Montgomery, Alabama',
      'Nashville, Tennessee',
      'New York City',
      'Pittsburgh, Pennsylvania',
      'Portland, Maine',
      'Raleigh, North Carolina',
      'San Juan, Puerto Rico',
      'Springfield, Massachusetts',
      'Syracuse, New York',
      'Tampa, Florida'
    ];
    this.locationsWest = [
      'Albuquerque, New Mexico',
      'Amarillo, Texas',
      'Anchorage, Alaska',
      'Boise, Idaho',
      'Butte, Montana',
      'Dallas, Texas',
      'Denver, Colorado',
      'Des Moines, Iowa',
      'El Paso, Texas',
      'Fargo, North Dakota',
      'Honolulu, Hawaii',
      'Houston, Texas',
      'Kansas City, Missouri',
      'Las Vegas, Nevada',
      'Little Rock, Arkansas',
      'Los Angeles',
      'Minneapolis, Minnesota',
      'New Orleans, Louisiana',
      'Oklahoma City, Oklahoma',
      'Omaha, Nebraska',
      'Phoenix, Arizona',
      'Portland, Oregon',
      'Riverside, California',
      'Sacramento, California',
      'Salt Lake City, Utah',
      'San Antonio, Texas',
      'San Diego, California',
      'San Jose, California',
      'Seattle, Washington',
      'Shreveport, Louisiana',
      'Sioux Falls, South Dakota',
      'Spokane, Washington',
      'St. Louis, Missouri',
    ];
    // this.onChanges();
    this.mockData.getUsers().subscribe(
      (data) => this.doctors = data,
      (error) => this.errorMsg = error,
      () => {
        console.log(this.doctors)
      }
    )
    
  }
  onSubmit(timecardForm:any) {
    this.getSector()

    console.log(this.timecardForm.sector)
    this.mockData.postTimecard(this.timecardForm.value).subscribe(
      (data) => {
        this.timecards = data;
        this.mockData.getTimecards().subscribe(
          (data) => this.timecards = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.route.navigate(['/timecard']).then(
      () => {
        window.location.reload();
      }
    );
    this.timecardForm.reset()
  }
  // onChanges(): void {
  //   this.timecardForm.get('location').valueChanges.subscribe( val => {
  //     console.log(`location is ${val}`)
  //   })
  // }

  get location() {
    return this.timecardForm.get('location');
  }

  get timeIn() {
    return this.timecardForm.get('timeIn');
  }

  get timeOut() {
    return this.timecardForm.get('timeOut');
  }

  get date() {
    return this.timecardForm.get('date');
  }

  get fbpPayroll() {
    return this.timecardForm.get('fbpPayroll');
  }

  get amcoPayroll() {
    return this.timecardForm.get('amcoPayroll');
  }

  getSector() {
    if (this.locationsEast.includes(this.timecardForm.get('location').value)) {
      this.timecardForm.get('sector').setValue('East')
      return 'East'
    }
    else {
      this.timecardForm.get('sector').setValue('West')
      return 'West'
    }
  }
  getFileNumber() {
    if (this.doctors != null && this.timecardForm.get('doctor').value !=null) {
      let doctor = this.timecardForm.get('doctor').value.split(' ')
      let res = this.doctors.filter( (d: { firstName: string; lastName: string;}) => {
        return d.firstName === doctor[0] && d.lastName === doctor[1]
      })
      this.timecardForm.get('fileNumber').setValue(res[0].id)
      return res[0].id
    }
  }
  timeOutError:any = false;

  getTimeOutError () {
    console.log(this.timeOutError)
    return this.timeOutError
  }
  getHoursWorked() {
    let timeOut = this.timecardForm.get('timeOut').value.split(':')
    let timeIn = this.timecardForm.get('timeIn').value.split(':');

    
    let t1 = timeIn[0]/1 + timeIn[1]/60
    let t2 = timeOut[0]/1 + timeOut[1]/60
   
    if (t1 > t2) {
      this.timeOutError = true
    }
    else {
      this.timeOutError = false
    }

    let res = t2-t1;
    console.log((res).toFixed(2))

    this.timecardForm.get('hoursWorked').setValue(res.toFixed(2))
    return res.toFixed(2)
  }
}
