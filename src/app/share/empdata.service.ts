import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService implements OnInit{

  empData = new BehaviorSubject<any>(null);

  arr:any;

  empDetail = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private route: ActivatedRoute) {
   
    this.http.get('../../assets/users.json').subscribe(data =>{
      console.log(data);
      this.arr = data;
    });

  }
  

  ngOnInit(): void {

  }

   

   getUsers(): Observable<any>{
     return this.http.get('../../assets/users.json').pipe(delay(1000))
   }

  setData(value){
    this.arr.push(value)
    this.empData.next(this.arr);
    console.log(value);
  }

  updateData(newValue, oldValue){
    console.log(this.arr);
    console.log(oldValue);
    setTimeout(() => {
      const index = this.arr.findIndex(x => x.email === oldValue.email);
      console.log(index);
      this.arr[index] = newValue;
      this.empData.next(this.arr);
    },5000)

  }

  deletedata(value){
    const index = this.arr.indexOf(value);
    this.arr.splice(index, 1);
    this.empData.next(this.arr);
  }

  setDetail(detail){
    this.empDetail.next(this.arr.filter(d => d.empid == detail.empid)[0]);
    //console.log(this.empDetail.value);
  }

  getdata(){
    this.empData.next(this.arr);
    return this.empData.asObservable();
  }

  getDetail(){
    return this.empDetail.asObservable();
  }

}
