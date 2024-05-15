import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  frmGrpLogin=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('', Validators.required)
  })

  ngOnInit(): void {

  }

  fnSubmit(){
    console.log(this.frmGrpLogin);
  }

  fnCancel(){

  }

  redirect(url:string){
    this.router.navigateByUrl(url);
  }
}
