import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.loginFrm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
   }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((res:any)=>{
      console.log(res);
    })
  }
  signIn(){
    const currentData = this.loginFrm.value;

    console.log(currentData);
  }
}
