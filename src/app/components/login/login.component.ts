import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/services/mock-data.service';
import { FormBuilder, Validators, ValidatorFn, FormGroup } from '@angular/forms';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:any;
  public addUserForm:any;
  users: any;
  errorMsg: any;
  user:any;

  constructor(
    private fb: FormBuilder, 
    private mockData: MockDataService,
    private server: NodeService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    },)

    this.addUserForm = this.fb.group({
      username: ['', ],
      password: ['', ],
      firstName: ['', ],
      lastName: ['', ],
      type: ['', ],

    },)
  }

  onSubmit(loginForm:any) {
    let username = this.loginForm.get('username').value
    let password = this.loginForm.get('password').value

    // this.mockData.getUsers().subscribe(
    //   (data) => this.users = data, 
    //   (error) => this.errorMsg = error,
    //   () => {
    //     let res = this.users.filter((u:{email:string, password:string})=> {
    //       return u.email === email && u.password === password
    //     })
    //     console.log(res)
    //     if (res.length === 0)
    //       alert('Wrong email or password')
    //     else 
    //       this.route.navigate(['/home'])

    //   }
    // )
  }
  onSubmit2(addUserForm:any) {
    // let username = this.loginForm.get('username').value
    // let password = this.loginForm.get('password').value
    // let firstName = this.loginForm.get('firstName').value
    // let lastName = this.loginForm.get('lastName').value
    // let type = this.loginForm.get('type').value


    this.server.postUser(this.addUserForm.value).subscribe(
      (data) => {
        this.users = data;
        this.server.getUsers().subscribe(
          (data) => this.users = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
  }
}
