import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder,ValidationErrors} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { service } from '../service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  submitted=false;
  show=true;
  constructor(private DIV:service, private dialog:MatDialog, 
    private route:Router,@Inject(MAT_DIALOG_DATA) public hello:any) { }

  registerform=new FormGroup({
    Reservation_ID: new FormControl(''),
    Hotel:new FormControl(''),
    Arrival:new FormControl(''),
    Depature:new FormControl(''),
    Type:new FormControl(''),
    Guests:new FormControl(''),
    Price:new FormControl('')
  })
  
Save(){
  let abc=JSON.stringify(this.registerform.value);
  console.log(abc);
  this.DIV.post(abc);
window.location.reload();
}
Reset(){
  window.location.reload();

}
  ngOnInit(): void {
    if(this.hello){
      console.log(this.hello);
      let Adate= this.hello.Arrival.spilt('T')
      let Ddate= this.hello.Arrival.spilt('T')

      this.registerform.patchValue({
        Reservation_ID:this.hello.Reservation_ID,
        Hotel:this.hello.Hotel,
        Arrival:Adate[0],
        Depature:Ddate[0],
        Type:this.hello.Type,
        Guests:this.hello.Guests,
        Price:this.hello.Price
      })
    }
  }

}
