import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  username:any;
  password:any;
  onclick(){
    if(this.username=="Sandhya"&& this.password=="2288")
    {
    this.router.navigate(['Home']);
    }
    else{
      alert("User not exist")
    }
  }

  ngOnInit(): void {
  }

}
