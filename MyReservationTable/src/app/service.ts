import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
    providedIn:"root"
})
export class service{
    httpOptions={
        headers:new HttpHeaders({
            'Content-Type':'application/json'
        })
    };
    constructor(private http:HttpClient){}
    public GetTable(){
        return this.http.get("https://localhost:44382/api/Reservation/GetTable")
    }
    public post(data:any){
        return this.http.post("https://localhost:44382/api/Reservation/Insert",data,this.httpOptions).subscribe();
    }
    public Delete(data:any){
        return this.http.post("https://localhost:44382/api/Reservation/Delete/"+data,this.httpOptions).subscribe();
    }    
    public Edit(data:any){
        return this.http.post("https://localhost:44382/api/Reservation/Edit/"+data,this.httpOptions).subscribe();
    }
}