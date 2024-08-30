import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpFrm: FormGroup;
  userdata: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signUpFrm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
   }
  ngOnInit(): void {
  }
  

  signUp(){
    const data = this.signUpFrm.value;
    const currentData = this.signUpFrm.value;
    this.userService.signUp(data).subscribe((res:any)=>{
      console.log(res);
      this.router.navigateByUrl('/home')
    })
    console.log(currentData);
  }

  cancel(): void {
    // Handle cancel action (e.g., navigate away or clear form)
  }
}
