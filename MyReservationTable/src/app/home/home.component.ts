import { Component, OnInit, ViewChild } from '@angular/core';
import { service } from '../service';
import{MatDialog}from '@angular/material/dialog';
import { AddReservationComponent } from '../add-reservation/add-reservation.component';
import{MatTableDataSource}from '@angular/material/table';
import{MatSort}from '@angular/material/sort';
import{MatPaginator}from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 user:any=null;
 @ViewChild(MatSort) sort!:MatSort;
@ViewChild(MatPaginator) pag!: MatPaginator;
 data:any
 boo:string[]=['Reservation_ID','Hotel','Arrival','Depature','Type','Price','Manage'];
 matData= new MatTableDataSource();
  constructor(private DIV:service,private dialog:MatDialog) { 
    // this.DIV.GetTable().subscribe((X)=>{this.user=X;})
  }
  opendialog(){
    this.dialog.open(AddReservationComponent,{
      width:"500px",
    });
  }
  Delete(Reservation_ID:any){
    this.DIV.Delete(Reservation_ID);
    window.location.reload();
  }
  Edit(upd:any){
  console.log(upd);
  this.dialog.open(AddReservationComponent,{
    width:"500px",data:upd
  });
  }
  ngOnInit(): void {
    this.DIV.GetTable().subscribe((x:any)=>{
      this.matData=new MatTableDataSource(x);
     this.matData.sort=this.sort;
     this.matData.paginator=this.pag;})
    
      console.log(this.data);
    }
  }
